// Two-digit position label for numbered lists and cards ("01", "02", …).
export const listNumber = (index: number): string =>
  String(index + 1).padStart(2, "0");
