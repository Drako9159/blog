import { day } from "./day";
import { night } from "./night";

export default function themeLibrary(theme) {
  const themes = {
    day: day,
    night: night,
  };
  return themes[theme];
}
