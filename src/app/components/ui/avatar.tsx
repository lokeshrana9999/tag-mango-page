"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "./utils";

interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  /** Size in pixels. Defaults to 40 (size-10) when omitted. */
  size?: number;
}

function Avatar({
  className,
  size,
  style,
  ...props
}: AvatarProps) {
  const sizeStyle = size != null ? { width: size, height: size, ...style } : style;
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        size == null && "size-10",
        className,
      )}
      style={sizeStyle}
      {...props}
    />
  );
}

interface AvatarImageProps {
  src: string;
  alt?: string;
  className?: string;
}

function AvatarImage({ src, alt, className }: AvatarImageProps) {
  return (
    <div
      data-slot="avatar-image"
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      className={cn("size-full rounded-full bg-cover bg-center", className)}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
