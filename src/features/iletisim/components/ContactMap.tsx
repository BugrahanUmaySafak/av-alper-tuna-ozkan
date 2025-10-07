"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/Container";

import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import { Button } from "@/components/ui/button";

type Coords = [number, number];

export default function ContactMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markerRef = useRef<LeafletMarker | null>(null);
  const [currentKey, setCurrentKey] = useState<"ankara" | "kirikkale">(
    "ankara"
  );
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);

  const locations = useMemo(
    () =>
      ({
        ankara: {
          center: [39.9208, 32.8541] as Coords,
          title: "Ankara Ofis",
        },
        kirikkale: {
          center: [39.8413024, 33.4980931] as Coords,
          title: "DEVA Avukatlık & Danışmanlık (Kırıkkale)",
        },
      } as Record<"ankara" | "kirikkale", { center: Coords; title: string }>),
    []
  );

  useEffect(() => {
    const loadLeaflet = async () => {
      if (typeof window === "undefined") return;

      // Leaflet CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);

      // Leaflet JS (dinamik)
      const L = await import("leaflet");

      // Varsayılan marker ikonlarını düzelt (any KULLANMADAN)
      const DefaultIcon = L.Icon.Default as unknown as {
        prototype: { _getIconUrl?: unknown };
        mergeOptions: (opts: {
          iconRetinaUrl: string;
          iconUrl: string;
          shadowUrl: string;
        }) => void;
      };
      // Private bir alan, bu yüzden unknown üstünden siliyoruz
      delete DefaultIcon.prototype._getIconUrl;

      DefaultIcon.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      if (!mapContainerRef.current || mapRef.current) return;

      const initial = locations.ankara;
      const map = L.map(mapContainerRef.current, {
        center: initial.center,
        zoom: 15,
        scrollWheelZoom: false,
      });
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      markerRef.current = L.marker(initial.center).addTo(map);
      markerRef.current.bindPopup(`<b>${initial.title}</b>`);

      map.on("click", () => {
        map.scrollWheelZoom.enable();
        setShowScrollHint(false);
      });

      map.on("mouseenter", () => {
        if (!map.scrollWheelZoom.enabled()) {
          setShowScrollHint(true);
        }
      });

      map.on("mouseout", () => {
        map.scrollWheelZoom.disable();
        setShowScrollHint(false);
      });

      setTimeout(() => {
        map.invalidateSize();
        setIsMapReady(true);
      }, 100);
    };

    loadLeaflet();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        markerRef.current = null;
      }
    };
  }, [locations]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const map = mapRef.current;
      if (!map || !mapContainerRef.current) return;

      const isOverMap = mapContainerRef.current.contains(e.target as Node);

      if (isOverMap && (e.ctrlKey || e.metaKey)) {
        if (!map.scrollWheelZoom.enabled()) {
          map.scrollWheelZoom.enable();
          setShowScrollHint(false);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  async function setLocation(key: "ankara" | "kirikkale") {
    setCurrentKey(key);
    const loc = locations[key];
    const map = mapRef.current;
    if (!map) return;

    const L = await import("leaflet");

    map.setView(loc.center, 15, { animate: true });

    if (!markerRef.current) {
      markerRef.current = L.marker(loc.center).addTo(map);
    } else {
      markerRef.current.setLatLng(loc.center);
    }

    const [lat, lng] = loc.center;
    markerRef.current.bindPopup(
      `<b>${loc.title}</b><br><a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" rel="noopener noreferrer">Yol Tarifi Al</a>`
    );
  }

  return (
    <section className="py-16">
      <Container>
        <div className="mb-4 flex items-center gap-2 ">
          <Button
            variant="map"
            className={`cursor-pointer px-5 py-2 rounded-md
    ${
      currentKey === "ankara"
        ? "bg-blue-700 text-white ring-1 ring-black scale-105"
        : "bg-white text-blue-700 scale-100"
    }
    hover:scale-110
  `}
            onClick={() => setLocation("ankara")}
          >
            Ankara
          </Button>

          <Button
            variant="map"
            className={`cursor-pointer px-5 py-2 rounded-md
    ${
      currentKey === "kirikkale"
        ? "bg-blue-700 text-white ring-1 ring-black scale-105"
        : "bg-white text-blue-700 scale-100"
    }
    hover:scale-110
  `}
            onClick={() => setLocation("kirikkale")}
          >
            Kırıkkale
          </Button>
        </div>

        <div className="relative h-96 rounded-xl overflow-hidden shadow-md border border-gray-100">
          <div
            ref={mapContainerRef}
            id="leaflet-map"
            className="absolute inset-0"
            aria-label="Harita"
          />

          {!isMapReady && (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="text-gray-500">Harita yükleniyor...</div>
            </div>
          )}

          {showScrollHint && isMapReady && (
            <div className="absolute inset-0 bg-black/5 pointer-events-none flex items-center justify-center z-[1000]">
              <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-700">
                Zoom yapmak için haritaya tıklayın veya Ctrl + Scroll kullanın
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
