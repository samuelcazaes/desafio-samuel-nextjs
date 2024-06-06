'use client';

import Link from "next/link";
import styles from './dashboard-header.module.css'
import BarsIcon from "@/icons/bars-icon";
import PizzaIcon from "@/icons/pizza-icon";
import GantIcon from "@/icons/gant-icon";
import { usePathname } from "next/navigation";

export default function DashboardHeader() {
  const pathName = usePathname();

  return (
    <div className={styles.dashBoardHeader}>
        <div className={styles.dashBoardNav}>
          <div className={styles.dashBoardNavItem}>
            <Link href={'/dashboard'} className={pathName === '/dashboard' ? 'active' : ''}>
              <BarsIcon/>
              <p>Barras</p>
            </Link>
          </div>
          <div className={styles.dashBoardNavItem}>
            <Link href={'/dashboard/pizza'} className={pathName === '/dashboard/pizza' ? 'active' : ''}>
              <PizzaIcon/>
              <p>Pizza</p>
            </Link>
          </div>
          <div className={styles.dashBoardNavItem}>
            <Link href={'/gant'} className={pathName === '/dashboard/gant' ? 'active' : ''}>
              <GantIcon/>
              <p>Gant</p>
            </Link>
          </div>
        </div>
      </div>
  )
}