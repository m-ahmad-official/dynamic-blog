"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar2() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="h-24 bg-[#7a0000]">
            <div className="flex justify-between items-center h-full sm:mx-[85px] mx-[21px]">
                <div>
                    <Image src={"/images/marvel-logo2.png"} alt="Marvel Studios" width={200} height={100} />
                </div>
                <div className="flex">
                    <ul className="sm:flex gap-6 hidden">
                        <li className="uppercase text-base text-white font-semibold hover:bg-[#1f1f1f] rounded-full sm:py-2 py-4 px-4 transition-all duration-500 flex items-center"><Link href="/">Home</Link></li>
                        <li className="uppercase text-base text-white font-semibold hover:bg-[#1f1f1f] rounded-full sm:py-2 py-4 px-4 transition-all duration-500 flex items-center"><Link href="/about">About</Link></li>
                        <li className="uppercase text-base text-white font-semibold hover:bg-[#1f1f1f] rounded-full sm:py-2 py-4 px-4 transition-all duration-500 flex items-center"><Link href="/contact">Contact</Link></li>
                    </ul>
                    <div className="sm:hidden text-white" onClick={toggleMenu}>
                        <i className='bx bx-menu text-3xl'></i>
                    </div>
                </div>
            </div>

            <div className=
                {
                    clsx("fixed h-full w-full sm:hidden bg-black/50 top-0 left-0 transition-all ease-in-out duration-500", menuOpen ? "translate-x-0" : "-translate-x-full")
                }
            >
                <div className="bg-[#7a0000] text-white flex flex-col gap-20 h-full py-12 px-8 w-[75%]">
                    <div className='text-white text-3xl' onClick={closeMenu}>&#10006;</div>
                    <ul className="flex flex-col gap-8">
                        <li className="uppercase text-lg text-white" onClick={closeMenu}><Link href="/">Home</Link></li>
                        <li className="uppercase text-lg text-white" onClick={closeMenu}><Link href="/about">About</Link></li>
                        <li className="uppercase text-lg text-white" onClick={closeMenu}><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
