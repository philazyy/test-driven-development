import { formatDuration } from "./duration";

describe("formatDuration", () => {
  test.each([
    [33, "33s"],
    [123, "2m 3s"],
    [500, "8m 20s"],
    [3600, "1h"],
    [3999, "1h 6m 39s"],
    [0, "0s"],
  ])("formats %i seconds as '%s'", (input, expected) => {
    expect(formatDuration(input)).toBe(expected);
  });

  test("Negative Zahlen werfen einen Fehler", () => {
    expect(() => formatDuration(-1)).toThrowError();
  });

  test("Nachkommastellen von Sekundenangaben werden durch Rundung eliminiert", () => {
    expect(formatDuration(Math.round(1.5))).toBe("2s");
  });
});
