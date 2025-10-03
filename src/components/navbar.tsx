"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";

interface INavbarProps {}

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

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    const pathname = usePathname();
    const isActive = (path: Url) => pathname === path;

    return(
        <nav className="pb-4 px-41 md:pb-8 flex justify-center items-center pd">
            <Link
                href="/"
                className="p-3 absolute left-0"
            >
                <Image
                          className="bg-red-"
                          src="/logo.png"
                          alt="Next.js logo"
                          width={41}
                          height= {41}
                          priority
                        />
            </Link>
            <ul className="p-3 flex justify-center items-center gap-4">
                {navItems.map((eachItem) => (
                    <li key={eachItem.id}>
                        <Link 
                            href={eachItem.href}
                            className={
                                `${isActive(eachItem.href) ? "text-spotify-green" : ""} hover:underline hover:underline-offset-4 hover:text-blue-700`
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