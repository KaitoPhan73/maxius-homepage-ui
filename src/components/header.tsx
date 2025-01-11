"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { headerPaths } from "@/constants/router";

export default function Header() {
  return (
    <div className="w-full mx-auto px-4 md:px-6 lg:px-8 fixed z-10 top-0 transition-colors mix-blend-difference ">
      <header className="flex h-24 w-full justify-between shrink-0 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
          <Icon className="h-30 w-20 dark:filter dark:invert" />
          <span className="sr-only">ShadCN</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-16 w-16 " />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0b1438]">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <Link href="/" prefetch={false}>
              <Icon className="h-10 w-90 dark:filter dark:invert" />
              <span className="sr-only">ShadCN</span>
            </Link>
            <div className="grid gap-2 py-6">
              {headerPaths.map((path, index) => (
                <Link
                  key={index}
                  href={path.link}
                  className="flex w-full items-center py-2 text-lg font-semibold text-white"
                  prefetch={false}
                >
                  {path.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* <div className="flex-grow hidden lg:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {headerPaths.map((path, index) => (
                <NavigationMenuLink key={index} asChild>
                  <Link
                    href={path.link}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                  >
                    {path.label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div> */}
      </header>
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="48" // Tăng kích thước
      height="48" // Tăng kích thước
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

const Icon: React.FC<any> = ({ className }) => {
  return (
    <div className={`flex items-center ${className || ""}`}>
      <p className="text-lg font-semibold text-white ">MAXIUS</p>
    </div>
  );
};
