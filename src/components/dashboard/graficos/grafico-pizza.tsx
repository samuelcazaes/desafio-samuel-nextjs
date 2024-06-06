'use client';

import { VictoryPie} from "victory";
import styles from './grafico-pizza.module.css'
import { useState } from "react";

export default function GraficoPizza() {

  const initialData = [
    {x: 'Trimestre 1', y: 13000},
    {x: 'Trimestre 2', y: 16500},
    {x: 'Trimestre 3', y: 14250},
    {x: 'Trimestre 4', y: 19000},
  ]

  const[data, setData] = useState(initialData);

  function randomizeData() {

    const newData = data.map((item) => ({
      x: item.x,
      y: parseFloat((Math.random() * 1000).toFixed(1)),
    }));
    setData(newData);
  }

  return (
    <section className={styles.graph}>
      <div className={styles.graphItem}>
          <VictoryPie
            data={data} 
            labels={({datum}) => `${datum.x}: 
            R$ ${datum.y}k`}
            padding={{left: 100, right: 100}}
            animate={{duration: 1000}}
            colorScale={["#4f81bd", "#c0504d", "#9bbb59", "#8064a2"]} 
            style={{
              labels: {
                fontSize: 10,
              }
            }}
          />
        <button onClick={randomizeData}>Atualizar Dados</button>
      </div>
    </section>
  )
}