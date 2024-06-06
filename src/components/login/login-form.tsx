'use client';

import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Loading from "../helpers/loading";
import React from "react";
import styles from './login-form.module.css';
import Input from "../forms/input";
import ErrorMessage from "../helpers/error-message";
import login from "@/actions/login";
import Link from "next/link";

function FormButton() {
  const {pending} = useFormStatus();
  return (<>
    {pending ? <Loading/> : <Button disabled={pending}>Entrar</Button>}
  </>)
}

export default function LoginForm() {

  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null
  });

  return (
    <> 
      <form action={action} className={styles.form}>
        <p>Digite suas credenciais.</p>
        <Input label='Email' name="email" type="email"/>
        <Input label='Senha' name="usuario" type="password"/>
        <Link className={styles.resetarSenha} href={'/login/resetar-senha'}>Esqueci minha senha?</Link>
        <ErrorMessage error={state.error}/>
        <FormButton/>
      </form>
    </>
  )
}