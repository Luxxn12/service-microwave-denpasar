"use client"

import { ExternalLink } from "lucide-react"

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Service+Microwave+Denpasar/@-8.6832746,115.1734419,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd247bbf300c7b5:0x803d4c4791bcf7e5!8m2!3d-8.6832746!4d115.1760222!16s%2Fg%2F11gmxygx_1?entry=ttu"

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Service%20Microwave%20Denpasar&z=17&output=embed"

export default function LocationMap() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-[24px] border border-white/70 shadow-lg dark:border-white/10">

      <iframe
        title="Lokasi Service Microwave Denpasar di Google Maps"
        src={GOOGLE_MAPS_EMBED_URL}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}
