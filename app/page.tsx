import Link from "next/link";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const languageId = cookieStore.get("languageId");

  return (
    <main className="px-4 pb-4">
      <p className="text-lg">Home page - Server component</p>
      <p className="my-4">
        This tiny Next.js 14 app is a small trial and example of using Cookies
        in Next.js to share application settings data across some components of
        the app.
      </p>
      {/* <p>
        <a
          href="https://github.com/ravisiyer/testusecontext-njs"
          className="underline"
        >
          GitHub Repo
        </a>
      </p> */}
      <hr className="border-black border my-4" />
      <p>
        This server component Home page retrieves the languageId cookie and
        shows its value below.
      </p>
      <p>languageId: {languageId ? languageId.value : "Cookie not found"}</p>
      <hr className="border-black border my-4" />
      <p className="my-4">
        Below link goes to another page which is a server component which
        includes a client component that edits languageId and provides user an
        option to save the cookie.
      </p>
      <Link
        href={
          "/settings" + (languageId ? `?languageId=${languageId.value}` : "")
        }
        className="underline my-4"
      >
        Edit languageId
      </Link>
    </main>
  );
}
