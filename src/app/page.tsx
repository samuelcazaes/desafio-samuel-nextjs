'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import React from "react";


export default function Home() {

  return (
    <main className={`${styles.container} ${styles.bg}`}>
      <div className={styles.main}>
        <div className={styles.leftColumn}>
          <h1>Bem vindo ao Projeto de Teste!</h1>
          <Image
            className={styles.bgImage} 
            src={'/imagens/graphs.jpg'}
            alt="gráficos"
            width={400}
            height={400}
          />
        </div>
        <div className={styles.rightColumn}>
          <h1>Faça login para continuar</h1>
          <Link href={"/login"}><button className={styles.buttonLogin}>Fazer Login</button></Link>

          <h1>Esqueci minha senha</h1>
          <Link href={"/login/resetar-senha"}><button>Resetar Senha</button></Link>
        </div>
      </div>
    </main>
  );
}
