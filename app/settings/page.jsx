"use client";
import { useState } from "react";
import { createLanguageCookie } from "../lib/formactions";
import Link from "next/link";

const Page = ({ searchParams }) => {
  const languageIdParam = searchParams?.languageId;
  let numericLanguageId = 1;
  if (languageIdParam && !isNaN(Number(languageIdParam))) {
    const tmp = Number(languageIdParam);
    if (Number.isInteger(tmp) && tmp > 0) {
      numericLanguageId = tmp;
    }
  }
  const [formLanguageId, setFormLanguageId] = useState(numericLanguageId);
  return (
    <form action={createLanguageCookie} className="p-4">
      <h2 className="text-xl">
        Query String version (current cookie value passed as query string
        (searchParams page prop))
      </h2>
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
        className="my-4 p-2 border border-black rounded-md bg-black text-white active:scale-90"
      >
        Set languageId Cookie
      </button>
      <Link href="/" className="ml-4 underline">
        Home
      </Link>
    </form>
  );
};

export default Page;
