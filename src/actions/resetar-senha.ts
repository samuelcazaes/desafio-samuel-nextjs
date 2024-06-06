'use server';

import { GET_USERS } from "@/functions/api";
import apiError from "@/functions/api-error";

export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
}

export default async function resetarSenha(state: {}, formData: FormData) {

  const email = formData.get('email') as string | null;

  const password = formData.get('usuario') as string | null;

  function findLogin(users:User[], email:string, password:string) {
    return users.find((user) => user.email === email && user.username === password)
  }

    try {
      if(!email || !password) throw new Error('Preencha os dados')

      if(email.length < 5) throw new Error('O email deve ter mais de 5 dígitos')

      if(email.length < 5) throw new Error('A senha deve ter mais de 5 dígitos')
  
      const {url} = GET_USERS();
      const response = await fetch(url);
      const data = await response.json() as User[];
      const loginData = findLogin(data, email, password);

      if(!loginData) {
        return {data: null, error: 'Email não encontrado ou senha inválida.', ok: true}
      }
      
      return {data: loginData, error: '', ok: true};
    } catch(error: unknown) {
      return apiError(error);
    }
}