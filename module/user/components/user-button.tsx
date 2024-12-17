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
import { useCurrentUser } from "../hooks/use-current-user";

export function UserButton() {
  const { data } = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <Avatar className="size-6">
            <AvatarImage src={data?.avatar} alt={data?.name}/>
            {data ?  (<AvatarFallback className="rounded-lg">{data.name}</AvatarFallback>):
            (<AvatarFallback>
              <Icons.user />
            </AvatarFallback>)}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      {data && <UserDropdownMenuContent user={data} />}
    </DropdownMenu>
  );
};
