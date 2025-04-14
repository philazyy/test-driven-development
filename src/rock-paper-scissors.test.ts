import { play } from "./rock-paper-scissors";

describe("play", () => {
  it("should return 0 for a tie (rock vs rock)", () => {
    expect(play("rock", "rock")).toBe(0);
  });

  it("should return 0 for a tie (paper vs paper)", () => {
    expect(play("paper", "paper")).toBe(0);
  });

  it("should return 0 for a tie (scissors vs scissors)", () => {
    expect(play("scissors", "scissors")).toBe(0);
  });

  it("should return 1 when player1 wins (rock vs scissors)", () => {
    expect(play("rock", "scissors")).toBe(1);
  });

  it("should return 1 when player1 wins (scissors vs paper)", () => {
    expect(play("scissors", "paper")).toBe(1);
  });

  it("should return 1 when player1 wins (paper vs rock)", () => {
    expect(play("paper", "rock")).toBe(1);
  });

  it("should return 2 when player2 wins (scissors vs rock)", () => {
    expect(play("scissors", "rock")).toBe(2);
  });

  it("should return 2 when player2 wins (paper vs scissors)", () => {
    expect(play("paper", "scissors")).toBe(2);
  });

  it("should return 2 when player2 wins (rock vs paper)", () => {
    expect(play("rock", "paper")).toBe(2);
  });

  it("should ignore case and whitespace", () => {
    expect(play(" Rock ", "  PAPER")).toBe(2);
    expect(play("scissors", "  Scissors ")).toBe(0);
  });

  it("should throw an error for invalid moves", () => {
    expect(() => play("invalid", "rock")).toThrow("Invalid move");
    expect(() => play("rock", "invalid")).toThrow("Invalid move");
    expect(() => play("invalid", "invalid")).toThrow("Invalid move");
  });
});