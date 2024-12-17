"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  href: string;
  label: string;
};

export const BackButton = ({
  href,
  label,
}: BackButtonProps) => {
  return (
    <Link href={href} className={cn(buttonVariants({ variant: "link", size: "sm" }), "w-full font-normal")}>
      {/* <p className="w-full font-normal"> */}
        {label}
      {/* </p> */}
    </Link>
    // <Button
    //   variant="link"
    //   className="w-full font-normal"
    //   size="sm"
    //   // asChild
    // >
    //   <Link href={href}>
    //     {label}
    //   </Link>
    // </Button>
  );
};
