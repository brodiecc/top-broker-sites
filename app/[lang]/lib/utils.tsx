export function convertIso(shortLang: string) {
  switch (shortLang) {
    case "en":
      return "English";
    case "vi":
      return "Vietnamese";
    default:
      return "English";
  }
}
