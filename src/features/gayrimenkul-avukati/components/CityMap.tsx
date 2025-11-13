"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";

const ICON_URL = {
  icon: "/leaflet/marker-icon.png",
  icon2x: "/leaflet/marker-icon-2x.png",
  shadow: "/leaflet/marker-shadow.png",
};

export type CityMapProps = {
  coords: [number, number];
  title: string;
  mapsLink: string;
};

export default function CityMap({ coords, title, mapsLink }: CityMapProps) {
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markerRef = useRef<LeafletMarker | null>(null);
  const leafletRef = useRef<typeof import("leaflet") | null>(null);
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
      const map = L.map(mapEl.current, { center: coords, zoom: 15 });
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

      markerRef.current = L.marker(coords, { icon }).addTo(map);
      const [lat, lng] = coords;
      markerRef.current.bindPopup(
        `<b>${title}</b><br/><a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" rel="noopener noreferrer">Yol Tarifi Al</a>`
      );

      requestAnimationFrame(() => {
        map.invalidateSize();
        setIsLoading(false);
        setLoaded(true);
      });
    } catch (error) {
      console.error("Harita yüklenemedi:", error);
      setIsLoading(false);
    }
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
    <div className="w-full">
      <div className="pb-4">
        <p className="text-sm text-gray-500">
          Haritayı yüklemek için tıklayın, Google Maps yeni sekmede açılır.{" "}
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Google Maps bağlantısı
          </a>
        </p>
      </div>

      <div className="relative z-0 h-96 rounded-xl overflow-hidden border border-gray-200 shadow">
        <div
          ref={mapEl}
          className="absolute inset-0 w-full h-full"
          role="region"
          aria-label={`${title} harita`}
          aria-busy={isLoading ? "true" : "false"}
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
                  aria-hidden
                />
                <p className="text-gray-600 font-medium">
                  Harita yükleniyor...
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-600 text-white"
                  aria-hidden
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L3 7v7c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold">
                  Haritayı görüntülemek için tıklayın
                </p>
                <p className="text-sm text-gray-600">
                  Etkileşimli harita yeni sekmede açılır.
                </p>
              </div>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
