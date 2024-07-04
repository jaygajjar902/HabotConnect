import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';
import { Button } from "./ui/button";
import { HabotLogo } from "./Icons";

export const Navbar = () => {
  return (
    <header className="sticky py-4 top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-12">
        <NavigationMenuList className="container h-14 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl flex"
            >
              <HabotLogo />
            </a>
          </NavigationMenuItem>

          {/* desktop */}
          <div className="flex">
            <nav className="hidden md:flex gap-2"></nav>

            <div className="hidden md:flex gap-8 items-center">
              <a href="">Find Suppliers</a>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex gap-1">Find Service Tags <ChevronDown /></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="outline"
                className="border-[#00732F] text-[#00732F]"
              >
                Login / Sign Up
              </Button>
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
