import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 py-4 px-4 bg-black/40 background-blur-lg z-100
  flex items-center border-b border-neutral-900 justify-between"
    >
      <aside className="flex items-center gap-2">
        <p className="text-2xl font-bold">Fu</p>
        <Image
          src="/fuzzieLogo.png"
          alt="Fuzzie logo"
          className="shadow-sm"
          width={15}
          height={15}
        />
        <p className="text-2xl font-bold">zie</p>
      </aside>
      <nav className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Pricing</Link>
          </li>{" "}
          <li>
            <Link href="/">Clients</Link>
          </li>{" "}
          <li>
            <Link href="/">Resources</Link>
          </li>{" "}
          <li>
            <Link href="/">Documentation</Link>
          </li>
          <li>
            <Link href="/">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px]
           focus:outline-none focus:ring-2 focus:ring-state-400 
           focus:ring-offset-2 focus:ring-offset-state-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span
            className="inline-flex h-full w-full cursor-pointer
        items-center justify-center rounded-full bg-slate-950 px-3 py-1
         text-sm font-medium text-white backdrop-blur-3xl"
          >
            {true ? "Dashboard" : "Get started"}
          </span>
        </Link>

        {/* /// WIP: user button in progresss */}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
