import DashboardHeader from "@/components/dashboard/dashboard-header";
import styles from './page.module.css'
import GraficoPizza from "@/components/dashboard/graficos/grafico-pizza";

export default async function PizzaPage() {
  return (
    <section>
      <DashboardHeader/>
      <div className={styles.graphContainer}>
        <div className={styles.graphWrapper}>
          <GraficoPizza/>
        </div>
      </div>
    </section>
  );
}