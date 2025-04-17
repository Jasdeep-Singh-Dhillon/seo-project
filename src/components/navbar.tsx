"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Navbar() {
  return (
    <NavigationMenu className="h-24 ms-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-6">
            <Image
              src="flamingo.svg"
              width={20}
              height={20}
              className="h-6 w-6"
              alt="FlaminGO Charger Icon"
            />
            <span className="ms-4 text-lg">FlaminGO Chargers</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src="flamingo.svg"
                      width={80}
                      height={80}
                      alt="FlaminGO Charger Icon"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Flamingo Charger
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Pre-charged and rechargeable portable chargers that were
                      featured on the show Shark Tank.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/products" title="FlaminGO Charger One Pack">
                Checkout FlaminGO pre-charged charger
              </ListItem>
              <ListItem href="#" title="FlaminGO Charger Three Pack">
                Three Pack FlaminGO pre-charged charger
              </ListItem>
              <ListItem href="#" title="FlaminGO Charger Five Pack">
                Five Pack FlaminGO pre-charged charger
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <div>
            <NavigationMenuLink
              href="/wholesale"
              className={navigationMenuTriggerStyle()}
            >
              Wholesale
            </NavigationMenuLink>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <div>
            <NavigationMenuLink
              href="/blog"
              className={navigationMenuTriggerStyle()}
            >
              Blog
            </NavigationMenuLink>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <div>
            <NavigationMenuLink
              href="/about"
              className={navigationMenuTriggerStyle()}
            >
              About
            </NavigationMenuLink>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
