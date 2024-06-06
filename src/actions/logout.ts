'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutAction() {
  cookies().delete('token');
  cookies().delete('userName')
  const token = cookies().get('token')?.value;
  const userName = cookies().get('userName')?.value;
  if(token || userName) return {deslogado: false};
  return {deslogado: true};
}