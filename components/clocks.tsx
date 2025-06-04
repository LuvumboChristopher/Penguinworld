"use client"

import { useEffect, useState } from "react"

const timeZones = [
    { city: "Los Angeles", country: "États-Unis", region: "Amérique du Nord", flag: "🇺🇸", offset: -7 },
    { city: "Toronto", country: "Canada", region: "Amérique du Nord", flag: "🇨🇦", offset: -4 },
    { city: "Mexico City", country: "Mexique", region: "Amérique du Nord", flag: "🇲🇽", offset: -5 },
    { city: "Bogotá", country: "Colombie", region: "Amérique du Sud", flag: "🇨🇴", offset: -5 },
    { city: "Madrid", country: "Espagne", region: "Europe", flag: "🇪🇸", offset: 2 },
    { city: "New York", country: "États-Unis", region: "Amérique du Nord", flag: "🇺🇸", offset: -4 },
    { city: "Paris", country: "France", region: "Europe", flag: "🇫🇷", offset: 2 },
    { city: "Lima", country: "Pérou", region: "Amérique du Sud", flag: "🇵🇪", offset: -5 },
    { city: "São Paulo", country: "Brésil", region: "Amérique du Sud", flag: "🇧🇷", offset: -3 },
    { city: "Seattle", country: "États-Unis", region: "Amérique du Nord", flag: "🇺🇸", offset: -7 },
    { city: "Rome", country: "Italie", region: "Europe", flag: "🇮🇹", offset: 2 },
    { city: "Dublin", country: "Irlande", region: "Europe", flag: "🇮🇪", offset: 1 },
    { city: "Miami", country: "États-Unis", region: "Amérique du Nord", flag: "🇺🇸", offset: -4 },
    { city: "Buenos Aires", country: "Argentine", region: "Amérique du Sud", flag: "🇦🇷", offset: -3 },
    { city: "Berlin", country: "Allemagne", region: "Europe", flag: "🇩🇪", offset: 2 },
    { city: "Lisbon", country: "Portugal", region: "Europe", flag: "🇵🇹", offset: 1 },
    { city: "Denver", country: "États-Unis", region: "Amérique du Nord", flag: "🇺🇸", offset: -6 },
    { city: "London", country: "Royaume-Uni", region: "Europe", flag: "🇬🇧", offset: 1 },
    { city: "Santiago", country: "Chili", region: "Amérique du Sud", flag: "🇨🇱", offset: -4 },
    { city: "Brussels", country: "Belgique", region: "Europe", flag: "🇧🇪", offset: 2 },
    { city: "Montreal", country: "Canada", region: "Amérique du Nord", flag: "🇨🇦", offset: -4 },
    { city: "Reykjavik", country: "Islande", region: "Europe", flag: "🇮🇸", offset: 0 },
    { city: "Houston", country: "États-Unis", region: "Amérique du Nord", flag: "🇺🇸", offset: -5 },
    { city: "Bilbao", country: "Espagne", region: "Europe", flag: "🇪🇸", offset: 2 },
    { city: "Amsterdam", country: "Pays-Bas", region: "Europe", flag: "🇳🇱", offset: 2 },
    { city: "Rio de Janeiro", country: "Brésil", region: "Amérique du Sud", flag: "🇧🇷", offset: -3 },
    { city: "Vienna", country: "Autriche", region: "Europe", flag: "🇦🇹", offset: 2 },
    { city: "Zurich", country: "Suisse", region: "Europe", flag: "🇨🇭", offset: 2 },
    { city: "Lyon", country: "France", region: "Europe", flag: "🇫🇷", offset: 2 },
]

function getTimeInZone(offset: number) {
    const now = new Date()
    const utc = now.getTime() + now.getTimezoneOffset() * 60000
    return new Date(utc + 3600000 * offset)
}

export function WorldClocks() {
    const [times, setTimes] = useState(() => timeZones.map((zone) => getTimeInZone(zone.offset)))

    useEffect(() => {
        const interval = setInterval(() => {
            setTimes(timeZones.map((zone) => getTimeInZone(zone.offset)))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="border-t-2 border-black">
            <div className="w-full overflow-hidden py-6 ">
                <div className="flex animate-scroll whitespace-nowrap gap-10 ">
                    {[...timeZones, ...timeZones].map((zone, i) => {
                        const time = times[i % timeZones.length]
                        const hours = time.getHours() % 12
                        const minutes = time.getMinutes()
                        const seconds = time.getSeconds()
                        return (
                            <div key={i} className="w-full flex flex-row items-center gap-2">
                                <div className="text-center min-w-[96px]">
                                    <div
                                        className="relative"
                                        style={{
                                            width: "64px",
                                            height: "64px",
                                            border: "2px solid black",
                                            borderRadius: "9999px",
                                            margin: "0 auto",
                                            backgroundColor: "white",
                                        }}
                                    >
                                        {/* Aguja Horaria */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                width: "3px",
                                                height: "20px",
                                                backgroundColor: "black",
                                                top: "50%",
                                                left: "50%",
                                                transform: `translate(-50%, -100%) rotate(${(hours + minutes / 60) * 30}deg)`,
                                                transformOrigin: "bottom",
                                                transition: "transform 0.5s ease-in-out",
                                            }}
                                        />
                                        {/* Aguja Minutera */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                width: "2px",
                                                height: "26px",
                                                backgroundColor: "#4B5563",
                                                top: "50%",
                                                left: "50%",
                                                transform: `translate(-50%, -100%) rotate(${(minutes + seconds / 60) * 6}deg)`,
                                                transformOrigin: "bottom",
                                                transition: "transform 0.5s ease-in-out",
                                            }}
                                        />
                                        {/* Aguja Segundera */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                width: "1px",
                                                height: "28px",
                                                backgroundColor: "#EF4444",
                                                top: "50%",
                                                left: "50%",
                                                transform: `translate(-50%, -100%) rotate(${seconds * 6}deg)`,
                                                transformOrigin: "bottom",
                                                transition: "transform 0.1s linear",
                                            }}
                                        />
                                        {/* Punto central */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                width: "6px",
                                                height: "6px",
                                                backgroundColor: "black",
                                                borderRadius: "50%",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <div className="flex items-center gap-2 pb-1">
                                        <p className="font-semibold text-xl">{zone.city}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 block">{zone.region}</p>
                                        <p className="font-semibold text-sm">{zone.country}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <style jsx>{`
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
            </div>
        </section>
    )
}