"use client";

import * as React from "react";
import dynamic from "next/dynamic";

// Dynamically import the map to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface Location {
  name: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
}

const locations: Location[] = [
  {
    name: "Montego Bay",
    address: "37 Union Street, Montego Bay, St. James",
    phone: "(876) 952-0212",
    lat: 18.4712,
    lng: -77.9228,
  },
  {
    name: "Kingston",
    address: "42a Constant Spring Road, Kingston 10",
    phone: "(876) 926-2079",
    lat: 18.0179,
    lng: -76.7978,
  },
];

export function LocationMap() {
  const [isMounted, setIsMounted] = React.useState(false);
  const [activeLocation, setActiveLocation] = React.useState<string | null>(null);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="aspect-[21/9] bg-funeral-navy/5 dark:bg-funeral-navy/20 rounded-md flex items-center justify-center">
        <p className="text-muted-foreground text-sm">Loading map...</p>
      </div>
    );
  }

  // Center of Jamaica (between Kingston and Montego Bay)
  const jamaicaCenter: [number, number] = [18.25, -77.4];

  return (
    <div className="space-y-4">
      {/* Location Toggle Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {locations.map((loc) => (
          <button
            key={loc.name}
            onClick={() => setActiveLocation(activeLocation === loc.name ? null : loc.name)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeLocation === loc.name
                ? "bg-funeral-gold text-funeral-navy"
                : "bg-muted hover:bg-muted/80 text-foreground"
            }`}
          >
            {loc.name}
          </button>
        ))}
      </div>

      {/* Map Container */}
      <div className="aspect-[21/9] rounded-md overflow-hidden border border-border">
        <MapWithLocations
          locations={locations}
          center={jamaicaCenter}
          activeLocation={activeLocation}
        />
      </div>
    </div>
  );
}

// Separate component that uses Leaflet hooks
interface MapWithLocationsProps {
  locations: Location[];
  center: [number, number];
  activeLocation: string | null;
}

function MapWithLocations({ locations, center, activeLocation }: MapWithLocationsProps) {
  const [customIcon, setCustomIcon] = React.useState<L.Icon | null>(null);

  React.useEffect(() => {
    // Import Leaflet and create custom icon on client side
    import("leaflet").then((L) => {
      const icon = new L.Icon({
        iconUrl: "/images/map-marker.svg",
        iconRetinaUrl: "/images/map-marker.svg",
        iconSize: [32, 40],
        iconAnchor: [16, 40],
        popupAnchor: [0, -40],
      });
      setCustomIcon(icon);
    });
  }, []);

  // Find active location for map centering
  const activeLocationData = activeLocation
    ? locations.find((l) => l.name === activeLocation)
    : null;

  const mapCenter: [number, number] = activeLocationData
    ? [activeLocationData.lat, activeLocationData.lng]
    : center;

  const zoom = activeLocation ? 14 : 9;

  if (!customIcon) {
    return (
      <div className="w-full h-full bg-funeral-navy/5 dark:bg-funeral-navy/20 flex items-center justify-center">
        <p className="text-muted-foreground text-sm">Loading map...</p>
      </div>
    );
  }

  return (
    <MapContainer
      center={mapCenter}
      zoom={zoom}
      className="w-full h-full z-0"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.name}
          position={[location.lat, location.lng]}
          icon={customIcon}
        >
          <Popup>
            <div className="text-funeral-navy">
              <p className="font-medium text-sm mb-1">{location.name}</p>
              <p className="text-xs text-gray-600 mb-1">{location.address}</p>
              <a
                href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
                className="text-xs text-funeral-gold hover:underline"
              >
                {location.phone}
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
