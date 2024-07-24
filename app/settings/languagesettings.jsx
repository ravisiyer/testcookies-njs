"use client";
import { useState } from "react";
import { createLanguageCookie } from "./formactions";
import Link from "next/link";

function LanguageSettings({ languageId = 1 }) {
  const [formLanguageId, setFormLanguageId] = useState(languageId);
  return (
    <form action={createLanguageCookie}>
      <label htmlFor="idLanguageId" className="mr-1">
        languageId
      </label>
      <input
        className="mr-1 my-4 text-black border border-neutral-500 w-16 md:w-11 py-px px-0.5"
        type="number"
        id="idLanguageId"
        name="languageId"
        size={2}
        value={formLanguageId}
        onChange={({ target }) => {
          setFormLanguageId(target.value);
        }}
      />
      <br />
      <button
        type="submit"
        className="my-4 p-2 border border-black rounded-md bg-black text-white"
      >
        Set Language Cookie
      </button>
      <Link href="/" className="ml-4 underline">
        Home
      </Link>
    </form>
  );
}
export default LanguageSettings;
