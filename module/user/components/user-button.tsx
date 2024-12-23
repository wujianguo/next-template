"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { UserDropdownMenuContent } from "./user-dropdown";
import { useCurrentUserOrNull } from "../hooks/use-current-user";
import { useRouter } from "next/navigation";

export function UserButton() {
  const router = useRouter();
  const user = useCurrentUserOrNull();
  if (!user) {
    return (
      <Button variant="ghost" size="sm" className="w-9 px-0" onClick={() => {
        router.push("/auth/login");
      }}>
        <Avatar className="size-6">
          <AvatarFallback>
              <Icons.user />
            </AvatarFallback>
          </Avatar>
      </Button>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <Avatar className="size-6">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            {user ? (<AvatarFallback className="rounded-lg">{user.name}</AvatarFallback>) :
              (<AvatarFallback>
                <Icons.user />
              </AvatarFallback>)}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      {user && <UserDropdownMenuContent user={user} />}
    </DropdownMenu>
  );
};
