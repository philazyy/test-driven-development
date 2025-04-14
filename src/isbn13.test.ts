import { isValid } from "./isbn13";

describe("isValid", () => {
  test.each([
    ["9780470059029", true],
    ["9780306406157", true],
    ["9781861972712", true],
    ["9780470059028", false],
    ["9780306406158", false],
    ["1234567890123", false],
    ["978047005902", false],
    ["97804700590291", false],
    ["", false],
  ])("returns %s for ISBN-13 '%s'", (isbn, expected) => {
    expect(isValid(isbn)).toBe(expected);
  });
});