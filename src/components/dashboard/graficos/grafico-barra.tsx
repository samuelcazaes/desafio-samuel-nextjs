'use client';

import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";
import styles from './grafico-barras.module.css'
import { useState } from "react";

export default function GraficoBarra() {

  const initialData = [
    {trimestre: 1, ganhos: 13000},
    {trimestre: 2, ganhos: 16500},
    {trimestre: 3, ganhos: 14250},
    {trimestre: 4, ganhos: 19000},
  ]

  const[data, setData] = useState(initialData);

  function randomizeData() {

    const newData = data.map((item) => ({
      trimestre: item.trimestre,
      ganhos: parseFloat((Math.random() * 10000).toFixed(2)),
    }));
    setData(newData);
  }

  return (
    <section className={styles.graph}>
      <div className={styles.graphItem}>
        <VictoryChart domainPadding={30}theme={VictoryTheme.material}>
          <VictoryAxis 
            tickValues={[1,2,3,4]}
            tickFormat={["1", "2","3","4",]}
            label={'Trimestre'}
            style={{
              axisLabel: {padding: 40}
            }}
          />
          <VictoryAxis 
            dependentAxis
            tickFormat={(x) => (`R$ ${x/1000}k`)}
            style={{
              tickLabels: {padding: 5}
            }}
          />
          <VictoryBar
            animate={{duration: 2000, onLoad: {duration: 1000}}}
            cornerRadius={{topLeft: 10}}
            data={data} 
            x="trimestre" 
            y="ganhos" 
            alignment="middle"
          />
        </VictoryChart>
        <button onClick={randomizeData}>Atualizar Dados</button>
      </div>
    </section>
  )
}