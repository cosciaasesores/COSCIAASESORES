"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackLead, type LeadChannel } from "@/lib/tracking";

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    channel: LeadChannel;
    location: string;
}

// Link externo (pestaña nueva) que registra el clic como lead.
export function TrackedLink({ channel, location, onClick, children, ...props }: TrackedLinkProps) {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            {...props}
            onClick={(e) => {
                trackLead(channel, location);
                onClick?.(e);
            }}
        >
            {children}
        </a>
    );
}
