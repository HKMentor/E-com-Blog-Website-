"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/app/@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/app/components/ui/sheet";
import { ModeToggle } from "@/app/@/components/ui/theme-btn"; // Theme toggle button

const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="text-2xl font-bold hover:text-red-500 cursor-pointer">
            Hooria_Codehub
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:scale-105 font-medium hover:font-semibold">Home</Link>
          <Link href="/pages/about" className="hover:scale-105 font-medium hover:font-semibold">About</Link>
          <Link href="/pages/blogs" className="hover:scale-105 font-medium hover:font-semibold">Blogs</Link>
          <Link href="/pages/contact" className="hover:scale-105 font-medium hover:font-semibold">Contact</Link>
          <div className="flex space-x-2">
            <Button className="mx-1 dark:bg-slate-200 dark:text-black bg-black text-white" variant="outline">Login</Button>
            <Button className="mx-1 dark:bg-slate-200 dark:text-black bg-black text-white" variant="outline">Sign up</Button>
            <ModeToggle /> {/* Theme toggle button */}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <ModeToggle /> {/* Theme toggle button for mobile */}

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger aria-label="Open menu" className="focus:outline-none">
              <Menu className="h-4 w-4 text-gray-900 dark:text-gray-200" />
            </SheetTrigger>
            <SheetContent className="dark:bg-blue-300">
              <SheetHeader>
                <SheetTitle className="font-bold text-2xl mb-4 text-black">HK_Blog</SheetTitle>
                <SheetDescription className="flex flex-col gap-6">
                
                    <Link href="/" className="hover:text-gray-900 text-gray-700">Home</Link>
                    <Link href="/pages/about" className="hover:text-gray-900 text-gray-700">About</Link>
                    <Link href="/pages/blogs" className="hover:text-gray-900 text-gray-700">Blogs</Link>
                    <Link href="/pages/contact" className="hover:text-gray-900 text-gray-700">Contact</Link>
                    <span>
                      <Button className="mx-1 text-xs bg-black text-white" variant="outline">Login</Button>
                      <Button className="mx-1 text-xs bg-black text-white" variant="outline">Sign up</Button>
                    </span>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
