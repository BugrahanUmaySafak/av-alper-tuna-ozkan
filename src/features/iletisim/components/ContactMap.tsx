"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/container/Container";
import { Button } from "@/components/ui/button";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import Section from "@/components/section/Section";

type LocationKey = "ankara" | "kirikkale";
type Coords = [number, number];

const LOCATIONS: Record<LocationKey, { center: Coords; title: string }> = {
  ankara: {
    center: [39.9208, 32.8541],
    title: "Ankara Ofis",
  },
  kirikkale: {
    center: [39.8413024, 33.4980931],
    title: "DEVA Avukatlık & Danışmanlık (Kırıkkale)",
  },
};

const ICON_URL = {
  icon: "/leaflet/marker-icon.png",
  icon2x: "/leaflet/marker-icon-2x.png",
  shadow: "/leaflet/marker-shadow.png",
};

export default function ContactMap() {
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markerRef = useRef<LeafletMarker | null>(null);
  const leafletRef = useRef<typeof import("leaflet") | null>(null);

  const [key, setKey] = useState<LocationKey>("ankara");
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  async function ensureLeaflet() {
    if (!leafletRef.current) {
      const L = await import("leaflet");
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: ICON_URL.icon2x,
        iconUrl: ICON_URL.icon,
        shadowUrl: ICON_URL.shadow,
      });
      leafletRef.current = L;
    }
    return leafletRef.current!;
  }

  async function initializeMap() {
    if (mapRef.current || !mapEl.current || isLoading) return;
    setIsLoading(true);

    try {
      const L = await ensureLeaflet();
      const initial = LOCATIONS[key];

      const map = L.map(mapEl.current, { center: initial.center, zoom: 15 });
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const icon = new L.Icon({
        iconUrl: ICON_URL.icon,
        iconRetinaUrl: ICON_URL.icon2x,
        shadowUrl: ICON_URL.shadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      markerRef.current = L.marker(initial.center, { icon }).addTo(map);
      const [lat, lng] = initial.center;
      markerRef.current.bindPopup(
        `<b>${initial.title}</b><br><a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" rel="noopener noreferrer">Yol Tarifi Al</a>`
      );

      requestAnimationFrame(() => {
        map.invalidateSize();
        setIsLoading(false);
        setLoaded(true);
      });
    } catch (e) {
      console.error("Harita yüklenemedi:", e);
      setIsLoading(false);
    }
  }

  async function handleLocationChange(next: LocationKey) {
    setKey(next);
    if (!mapRef.current) return;

    const L = leafletRef.current!;
    const loc = LOCATIONS[next];
    mapRef.current.setView(loc.center, 15, { animate: true });

    const icon = new L.Icon({
      iconUrl: ICON_URL.icon,
      iconRetinaUrl: ICON_URL.icon2x,
      shadowUrl: ICON_URL.shadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    if (!markerRef.current) {
      markerRef.current = L.marker(loc.center, { icon }).addTo(mapRef.current);
    } else {
      markerRef.current.setLatLng(loc.center);
      markerRef.current.setIcon(icon);
    }

    const [lat, lng] = loc.center;
    markerRef.current.bindPopup(
      `<b>${loc.title}</b><br><a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" rel="noopener noreferrer">Yol Tarifi Al</a>`
    );
  }

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        markerRef.current = null;
      }
    };
  }, []);

  return (
    <Section>
      <Container>
        <div className="flex items-center gap-2 pb-4">
          <Button
            variant="outline"
            aria-pressed={key === "ankara"}
            className={`transition-all ${
              key === "ankara"
                ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:text-white"
                : ""
            }`}
            onClick={() => handleLocationChange("ankara")}
          >
            Ankara
          </Button>
          <Button
            variant="outline"
            aria-pressed={key === "kirikkale"}
            className={`transition-all ${
              key === "kirikkale"
                ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:text-white"
                : ""
            }`}
            onClick={() => handleLocationChange("kirikkale")}
          >
            Kırıkkale
          </Button>
        </div>

        <div className="relative z-0 h-96 rounded-xl overflow-hidden shadow-md border border-gray-200">
          <h2 id="map-title" className="sr-only">
            Harita
          </h2>

          <div
            ref={mapEl}
            role="region"
            aria-labelledby="map-title"
            aria-busy={isLoading ? "true" : "false"}
            className="absolute inset-0 w-full h-full"
          />

          {!loaded && (
            <button
              type="button"
              onClick={initializeMap}
              className="absolute inset-0 z-10 grid place-items-center bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-colors cursor-pointer"
              aria-label="Haritayı yüklemek için tıklayın"
            >
              {isLoading ? (
                <div role="status" aria-live="polite" className="text-center">
                  <div
                    className="inline-block w-12 h-12 mb-4 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"
                    aria-hidden="true"
                  />
                  <p className="text-gray-600 font-medium">
                    Harita yükleniyor...
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-600 text-white"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-gray-800 mb-1">
                    Haritayı Kullanmak İçin Tıklayın
                  </p>
                  <p className="text-sm text-gray-600">
                    Konumumuzu görmek için haritayı yükleyin
                  </p>
                </div>
              )}
            </button>
          )}
        </div>
      </Container>
    </Section>
  );
}
