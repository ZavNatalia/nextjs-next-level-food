"use client"
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.scss';
import Link from 'next/link';

interface NavLinkProps {
    href: string,
    children: ReactNode
}

export default function NavLink({href, children}: NavLinkProps) {
    const pathname = usePathname();
    return <Link
        href={href}
        className={pathname.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}
    >
        {children}
    </Link>
}