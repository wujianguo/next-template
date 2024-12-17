"use client";

// import { signIn } from "next-auth/react";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
// import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    console.log("provider", provider);
    // signIn(provider, {
    //   callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    // });
  }

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
      >
        {/* <FcGoogle className="h-5 w-5" /> */}
        <Icons.google className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("github")}
      >
        {/* <FaGithub className="h-5 w-5" /> */}
        <Icons.gitHub className="h-5 w-5" />
      </Button>
    </div>
  );
};
