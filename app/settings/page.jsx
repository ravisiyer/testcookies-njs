import LanguageSettings from "./languagesettings";

const Page = ({ searchParams }) => {
  const languageIdParam = searchParams?.languageId;
  let numericLanguageId = 1;
  if (languageIdParam && !isNaN(Number(languageIdParam))) {
    const tmp = Number(languageIdParam);
    if (Number.isInteger(tmp) && tmp > 0) {
      numericLanguageId = tmp;
    }
  }

  return (
    <div className="p-4">
      <LanguageSettings languageId={numericLanguageId} />
    </div>
  );
};

export default Page;
