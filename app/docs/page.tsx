import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">

        <section className="grid items-center gap-6 px-4 md:px-8 pb-8 pt-6 md:py-10">
          Documents.
        </section>
      </div>
    </div>
  )
}
