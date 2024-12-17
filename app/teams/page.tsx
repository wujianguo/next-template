"use client"

import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { useTeamList } from "@/module/team/hooks/use-team-list"
import { Card, CardContent } from "@/components/ui/card"
import { CreateTeamButton } from "@/module/team/components/create-team"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

export default function IndexPage() {
  const { data } = useTeamList()
  const [apps, setApps] = useState(data)
  useEffect(() => {
    setApps(data)
  }, [data]);

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">

        <section className="grid items-center gap-6 px-4 md:px-8 pb-8 pt-6 md:py-10">

          <div className="flex items-center justify-between">
            <Input
              placeholder="Search"
              className="h-8 w-[150px] lg:w-[250px]"
              disabled={!data}
              onChange={(e) => {
                const value = e.target.value
                if (value === "") {
                  setApps(data)
                  return
                }
                if (!data) return
                setApps(data.filter((app) => {
                  return app.name.toLowerCase().includes(value.toLowerCase()) || app.slug.toLowerCase().includes(value.toLowerCase())
                }))
              }}
            />
            <CreateTeamButton />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {apps &&
              apps.map((app) => (
                <Link key={app.slug} href={`/teams/${app.slug}`}>
                  <Card>
                    <CardContent className="p-3">
                      <div className="container flex p-3 pl-1">
                        <Image
                          className="rounded-lg"
                          src={app.icon || "/default.jpg"}
                          alt="Icon of the application"
                          width={64}
                          height={64}
                        ></Image>
                        <div className="ml-4 space-y-2">
                          <div className="text-2xl font-bold">{app.name}</div>
                          <p className="text-xs text-muted-foreground">
                            {app.slug}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}
