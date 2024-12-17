import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { UserButton } from "@/module/user/components/user-button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center px-4 md:px-8 space-x-4 sm:justify-between sm:space-x-0">
        {/* <MainNav items={siteConfig.mainNav} /> */}
        <div className="flex gap-6 md:gap-10">
          {/* <Link href="/" className="mr-2 flex items-center md:mr-6 md:space-x-2"> */}
          <Link href="/" className="flex items-center md:space-x-2">
          <Icons.logo className="size-6" aria-hidden="true" />
          <span className="hidden font-bold md:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="size-6" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            {/* <ThemeToggle /> */}
            <UserButton />
          </nav>
        </div>
      </div>
    </header>
  )
}
