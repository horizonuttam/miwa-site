"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { Arrow } from "./Arrow";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const home = pathname === "/";

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/media/logo-wix.png" alt="MIWA logo" width={49} height={46} priority />
          <span>{site.motto}</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav id="main-nav" className={`nav${open ? " open" : ""}`} aria-label="Site">
          {site.nav.map((item) => {
            const active = item.href === "/" ? home : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a href={`mailto:${site.email}`} className="btn btn-olive">
          Connect with us! <Arrow />
        </a>
      </div>
    </header>
  );
}
