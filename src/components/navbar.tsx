import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

async function NavBar() {
  const user = await currentUser();

  return (
    <div className=" bg-gray-950 ">
      <nav className="flex justify-between items-center max-w-5xl m-auto">
        <div className="flex items-center gap-5">
          <h2 className="pl-3">
            <Link href="/">WebNovel</Link>
          </h2>
         {user ?  <Link className="text-blue-700" href="/dashboard">
            Dashboard
          </Link>:null}
        </div>

        <header className="flex justify-end items-center p-4 gap-4 h-16 ">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </nav>
    </div>
  );
}

export default NavBar;
