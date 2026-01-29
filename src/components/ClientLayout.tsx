"use client";

import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const showNavbar = pathname !== '/siniestros';

    return (
        <>
            {showNavbar && <Navbar />}
            {children}
        </>
    );
}
