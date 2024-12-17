'use client';

import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SimpleTooltip } from "../simple-tooltip";
// import { SimpleTooltip, cn, Avatar, AvatarImage, Badge, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../..";

export function TextCell(props: { children: React.ReactNode, size?: number, icon?: React.ReactNode }) {
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const overflowStyle = "text-ellipsis text-nowrap overflow-x-hidden";

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        const isOverflowing = textRef.current.scrollWidth > textRef.current.clientWidth;
        setIsOverflowing(isOverflowing);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  return (
    <div className="relative" style={{ minWidth: props.size }}>
      <div className="flex items-center gap-2 absolute inset-0">
        <div className={overflowStyle} ref={textRef}>
          {isOverflowing ? (
            <SimpleTooltip tooltip={props.children}>
              <div className={overflowStyle}>
                {props.children}
              </div>
            </SimpleTooltip>
          ) : props.children}
        </div>
        {props.icon && <div>{props.icon}</div>}
      </div>
    </div>
  );
}

export function AvatarCell(props: { src?: string }) {
  return (
    <Avatar className="h-6 w-6">
      <AvatarImage src={props.src} />
    </Avatar>
  );
}

export function DateCell(props: { date: Date, ignoreAfterYears?: number }) {
  const ignore = !!props.ignoreAfterYears && new Date(new Date().setFullYear(new Date().getFullYear() + props.ignoreAfterYears)) < props.date;
  const timeString = props.date.toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
  return (
    <TextCell size={140}>
      {ignore ? 'Never' : timeString}
    </TextCell>
  );
}
