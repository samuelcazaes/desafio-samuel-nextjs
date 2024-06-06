import Link from "next/link";
import styles from './header.module.css'
import { cookies } from "next/headers";
import Logout from "./helpers/logout";

export default async function Header() {

  const token = cookies().get('token')?.value;
  const userName = cookies().get('userName')?.value;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navItems}>
          <Link href={'/'}><span>Home</span></Link>
          <Link href={'/dashboard'}><span>Dashboard</span></Link>
        </div>
        <div className={styles.loginDiv}>
          { userName ? <p>{userName}</p> : ''}
          { !token ? (
            <Link href={'/login'}><span className={styles.spanLogin}>Login</span></Link> )
            : (
              <div>
                <Logout/>
              </div>
             )
          }
        </div>
      </nav>
    </header>
  )
} 