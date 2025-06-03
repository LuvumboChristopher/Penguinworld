"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const projects = {
  websites: [
    {
      title: "Quartier Libre",
      description: "Site vitrine présentant les séjours éducatifs et linguistiques.",
      url: "https://www.quartier-libre.fr",
      image: "/projects/quartier-libre.jpg",
    },
    {
      title: "Promovols",
      description: "Landing page moderne avec système de réservation simple.",
      url: "https://www.promovols.com",
      image: "/projects/promovols.jpg",
    },
  ],
  reservations: [
    {
      title: "Resaneo",
      description: "Plateforme B2B pour la réservation de vols multi-compagnies.",
      url: "https://www.resaneo.com",
      image: "/projects/resaneo.jpg",
    },
    {
      title: "BDV - Bourse des Vols",
      description: "Comparateur de vols avec moteur de recherche intelligent.",
      url: "https://www.bourse-des-vols.com",
      image: "/projects/bdv-vols.jpg",
    },
    {
      title: "BDV - Bourse de Voyages",
      description: "Portail tout-en-un pour la comparaison et réservation de séjours.",
      url: "https://www.bourse-des-voyages.com",
      image: "/projects/bdv-voyages.jpg",
    },
  ],
  apps: [
    {
      title: "SpeedMedia Backoffice",
      description: "Application de gestion de contenu pour agences de voyage.",
      url: "https://pro.speedmedia.fr",
      image: "/projects/speedmedia.jpg",
    },
  ],
}

interface Project {
  title: string
  description: string
  url: string
  image: string
}

export function FeaturedProjects() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Nos Réalisations</h2>
          <p className="text-muted-foreground">Découvrez quelques solutions développées par PinguinWorld</p>
        </div>

        <Tabs defaultValue="reservations" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="websites">Sites vitrines</TabsTrigger>
            <TabsTrigger value="reservations">Réservations</TabsTrigger>
            <TabsTrigger value="apps">Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="websites">
            <div className="grid md:grid-cols-3 gap-6">
              {projects.websites.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reservations">
            <div className="grid md:grid-cols-3 gap-6">
              {projects.reservations.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="apps">
            <div className="grid md:grid-cols-3 gap-6">
              {projects.apps.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, url, image }: Project) {
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0 space-y-4">
        <div className="relative aspect-video">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
            {url.replace(/^https?:\/\//, "")}
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
