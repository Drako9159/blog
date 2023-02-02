import { spanish } from "./spanish";
import { english } from "./english";

export default function languageLibrary(language) {
  const languages = {
    spanish: spanish,
    english: english,
  };
  return languages[language];
}
