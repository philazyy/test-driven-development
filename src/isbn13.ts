export function isValid(isbn13: string): boolean {
  if (!/^\d{13}$/.test(isbn13)) return false;

  const digits = isbn13.split("").map(Number);
  const checksum =
    digits
      .slice(0, 12)
      .reduce((sum, digit, index) => sum + digit * (index % 2 === 0 ? 1 : 3), 0) % 10;

  return (10 - checksum) % 10 === digits[12];
}