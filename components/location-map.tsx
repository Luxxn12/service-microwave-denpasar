"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"
import { useTheme } from "next-themes"
import { ExternalLink } from "lucide-react"

// Mengatasi masalah icon Leaflet di Next.js
const customIcon = (theme: string) =>
  new Icon({
    iconUrl:
      theme === "dark"
        ? "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
        : "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

// Koordinat lokasi kantor
const OFFICE_LOCATION = {
  name: "Service Microwave Denpasar",
  position: [-8.6832746,115.1760222],
  address: "Jl. Gn. Atena I No.11a, Padangsambian Klod, Kec. Denpasar Bar., Kota Denpasar, Bali 80361",
}

// URL Google Maps untuk lokasi
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Service+Microwave+Denpasar/@-8.6832746,115.1734419,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd247bbf300c7b5:0x803d4c4791bcf7e5!8m2!3d-8.6832746!4d115.1760222!16s%2Fg%2F11gmxygx_1?entry=ttu"


export default function LocationMap() {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const [icon, setIcon] = useState<Icon | null>(null)

  useEffect(() => {
    setIsMounted(true)
    setIcon(customIcon(resolvedTheme || "light"))
  }, [resolvedTheme])

  const openGoogleMaps = () => {
    window.open(GOOGLE_MAPS_URL, "_blank")
  }

  if (!isMounted) {
    return (
      <div className="w-full h-[300px] bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Loading map...</p>
      </div>
    )
  }

  return (
    <div
      className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg cursor-pointer relative"
      onClick={openGoogleMaps}
    >
      <div className="absolute top-2 right-2 z-[1000] bg-white dark:bg-gray-800 p-2 rounded-md shadow-md flex items-center gap-1 text-xs">
        <ExternalLink className="h-3 w-3" />
        <span>Buka di Google Maps</span>
      </div>
      <MapContainer
        center={OFFICE_LOCATION.position as [number, number]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        className="z-10"
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={
            resolvedTheme === "dark"
              ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
        />
        <Marker position={OFFICE_LOCATION.position as [number, number]} icon={icon as Icon}>
          <Popup>
            <div className="p-1">
              <h3 className="font-bold text-sm">{OFFICE_LOCATION.name}</h3>
              <p className="text-xs">{OFFICE_LOCATION.address}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
