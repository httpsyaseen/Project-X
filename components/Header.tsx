import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="bg-background  px-2 md:px-6 lg:px-8 border-b ">
      <div className="container mx-auto flex items-center justify-between py-3 border-b md:border-none">
        <Link href="#">
          <span className="text-2xl  font-semibold">Easify</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden w-full max-w-md md:flex">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full rounded-full border border-input bg-background px-4 py-2 pr-10 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <button className=" px-3 py-2 rounded-full bg-black text-white text-nowrap ">
            Sign Up
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9 hover:cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex md:hidden my-4 justify-center items-center self-center px-3">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full rounded-full border border-input bg-background px-4 py-3 pr-10 text-sm focus:border-primary focus:outline-none"
        />
      </div>
    </header>
  );
}
