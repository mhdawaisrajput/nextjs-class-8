import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { headers } from "next/headers";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between bg-black text-white text-lg px-4 py-4 max-w-screen-2xl mx-auto">
      {/* For Logo: */}
      <div>Muhammad Awais.</div>

      {/* For Navbar Links: */}
      <nav>

        {/* For Mobile Screen: */}
        <ul>
          <li className="space-x-5 hidden md:block">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </li>
        </ul>

        {/* For Mobile Screen: */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}