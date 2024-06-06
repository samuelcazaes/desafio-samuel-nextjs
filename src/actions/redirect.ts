'use server';

import { redirect } from "next/navigation";

export default async function useRedirect(location: string) {
  redirect(`${location}`);
}