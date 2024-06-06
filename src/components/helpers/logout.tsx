'use client'

import LogoutAction from "@/actions/logout"
import { useRouter } from "next/navigation";
import styles from './logout.module.css'
import useRedirect from "@/actions/redirect";

export default function Logout() {
  async function HandleLogout() {
    window.confirm('Deseja mesmo deslogar?')
    const response = await LogoutAction();
    console.log('Reposta da action: ' + response.deslogado)
    if(!response.deslogado) {
      window.alert('Erro ao deslogar');
    }
    console.log('Deslogado, esperando redirecionamento ')
    await useRedirect('/');
  }

  return (
    <span onClick={HandleLogout} className={styles.spanLogout}>Logout</span>
  )
}