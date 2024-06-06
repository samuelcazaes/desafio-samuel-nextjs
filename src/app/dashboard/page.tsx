import { cookies } from "next/headers"
import styles from './page.module.css'
import Link from "next/link";
import Image from "next/image";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import GraficoBarra from "@/components/dashboard/graficos/grafico-barra";

export default async function DashboardPage() {

  const username = cookies().get('userName')?.value;

  return (
    <section>
      <div className={styles.title}>
        {username && <h1>{username}, Bem Vindo(a) a sua Dashboard</h1>}
      </div>
      <DashboardHeader/>
      <div className={styles.graphContainer}>
        <div className={styles.graphWrapper}>
          <GraficoBarra/>
        </div>
      </div>
    </section>
  )
}