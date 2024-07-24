"use server";
import { cookies } from "next/headers";

export async function createLanguageCookie(formData) {
  const languageId = formData.get("languageId");
  cookies().set("languageId", languageId);
}
