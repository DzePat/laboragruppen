"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";

interface INavbarProps {
  title: string;
}

const navItems = [
    {
        id: "about",
        label: "OM OSS",
        href: "/about",
    },
    {
        id: "search",
        label: "HITTA PERSONAL",
        href: "/search",
    },
    {
        id: "jobs",
        label: "SÖK JOBB",
        href: "/jobs",
    },
    {
        id: "contacts",
        label: "KONTAKT",
        href: "/contacts",
    },
];

const Navbar: React.FunctionComponent<INavbarProps> = () => {
    const pathname = usePathname();
    const isActive = (path: Url) => pathname === path;

    return(
        <nav className="pb-1 flex justify-center items-center">
            <Link
                href="/"
                className="absolute left-0"
            >
                <Image
                          src="/newLogo.png"
                          alt="Next.js logo"
                          width={60}
                          height= {60}
                          priority
                        />
            </Link>
            <ul className="p-3 flex justify-center items-center gap-4">
                {navItems.map((eachItem) => (
                    <li key={eachItem.id}>
                        <Link 
                            href={eachItem.href}
                            className={
                                `${isActive(eachItem.href) ? "text-spotify-green" : ""} text-white hover:underline hover:underline-offset-4 hover:[color:#d6921c]`
                            }
                        >
                            {eachItem.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;