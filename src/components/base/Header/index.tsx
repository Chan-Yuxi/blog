"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import ThemeToggle from "@/components/base/Theme/toggle";
import Link from "next/link";

const menuItems = ["Explore", "Article", "Profile"];

export default function Header() {
  return (
    <Navbar isBordered>
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>Saturn Savage</NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {menuItems.map((item, i) => (
          <NavbarItem className="hidden sm:block" key={i}>
            <Link href="#">{item}</Link>
          </NavbarItem>
        ))}
        <NavbarItem className="sm:ms-8">
          <ThemeToggle />
        </NavbarItem>
        <NavbarItem>
          <Button variant="ghost">Sign Up</Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, i) => (
          <NavbarMenuItem key={i}>
            <Link href="#">{item}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
