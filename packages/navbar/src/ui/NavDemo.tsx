"use client"

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./Navbar";

import Link from "next/link";
import { NavObjectType } from "../server";
import { cn } from "@lib/utils";

type Props = {
  components: NavObjectType[];
  navData: any;
  final: object[];
};

export const NavDemo = ({ components, navData, final }: Props) => {
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">{navData.brandLogo.logoText}</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <NavigationMenu>
            <NavigationMenuList>
              {final.map((navItem) => {
                if (navItem.type === "variant1") {
                  return (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                <div className="mt-4 mb-2 text-lg font-medium text-white">
                                  {navItem.tile.text}
                                </div>
                                <p className="text-sm leading-tight text-white/90">
                                  {navItem.tile.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          {navItem.subTiles.map((subTile) => {
                            return (
                              <ListItem href={subTile.href} title={subTile.title}>
                                {subTile.description}
                              </ListItem>
                            )
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                } else if (navItem.type === "variant2") {
                  return (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {navItem.components.map((component) => (
                            <ListItem
                              key={component.id}
                              title={component.attributes.title}
                              href={component.attributes.href}
                            >
                              {component.attributes.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                } else if (navItem.type === "variant3") {
                  return (
                    <NavigationMenuItem>
                      <Link href={navItem.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {navItem.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";