'use client';

import styles from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";
import { cx } from 'class-variance-authority';

type ActiveLinkProps = {
  children: JSX.Element | string;
  href: string;
  className?: string;
};

export default function ActiveLink({ children, href, className }: ActiveLinkProps) {
  const pathName = usePathname();

  return (
    <a href={href} className={cx({[styles.activeLink]: href===pathName })}>
      {children}
    </a>
  );
}
