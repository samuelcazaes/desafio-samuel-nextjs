'use client';

import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Loading from "../helpers/loading";
import React from "react";
import styles from './resetar-senha-form.module.css';
import Input from "../forms/input";
import ErrorMessage from "../helpers/error-message";
import login from "@/actions/login";
import Link from "next/link";
import resetarSenha from "@/actions/resetar-senha";
import Image from "next/image";

function FormButton() {
  const {pending} = useFormStatus();
  return (<>
    {pending ? <Loading/> : <Button disabled={pending}>Entrar</Button>}
  </>)
}

export default function ResetarSenhaForm() {

  const [state, action] = useFormState(resetarSenha, {
    ok: false,
    error: '',
    data: null
  });

  const requestState = state.ok
  const requestData = state.data;

  return (
    <> 
      {!requestState ? 
        <form action={action} className={styles.form}>
          <p>Digite suas credenciais e a nova senha.</p>
          <Input label='Email' name="email" type="email"/>
          <Input label='Nova Senha' name="usuario" type="password"/>
          <ErrorMessage error={state.error}/>
          <FormButton/>
        </form>
      :
        <div className={styles.successWrapper}>
          <p>Oba! {requestData?.name}, sua senha foi resetada com sucesso.</p>
          <Image
          className={styles.passwordResetImage}
          width={800}
          height={400}
          alt="Nova senha" 
          src={'/imagens/password-reset.jpg'}
          quality={75}
          />
          <span>Que tal fazer login agora?</span> <br />
          <Link href={'/login'}><button>Ir para Login!</button></Link>
        </div>
      }
      
    </>
  )
}