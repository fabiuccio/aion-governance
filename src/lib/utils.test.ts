import { describe, expect, it } from "vitest";

import { calculateReadingTime, formatLongDate, slugify } from "./utils";

describe("slugify", () => {
  it("lowercases and hyphenates words", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });
  it("strips special characters", () => {
    expect(slugify("AI Governance: A Framework")).toBe("ai-governance-a-framework");
  });
  it("trims leading and trailing whitespace", () => {
    expect(slugify("  hello  ")).toBe("hello");
  });
  it("collapses multiple separators into one hyphen", () => {
    expect(slugify("a -- b")).toBe("a-b");
  });
  it("returns empty string for empty input", () => {
    expect(slugify("")).toBe("");
  });
});

describe("calculateReadingTime", () => {
  it("returns minimum 3 min for very short content", () => {
    expect(calculateReadingTime("short text")).toBe("3 min read");
  });
  it("returns 3 min for exactly 660 words (220 wpm)", () => {
    const words = Array(660).fill("word").join(" ");
    expect(calculateReadingTime(words)).toBe("3 min read");
  });
  it("returns 10 min for 2200 words", () => {
    const words = Array(2200).fill("word").join(" ");
    expect(calculateReadingTime(words)).toBe("10 min read");
  });
  it("handles empty string", () => {
    expect(calculateReadingTime("")).toBe("3 min read");
  });
});

describe("formatLongDate", () => {
  it("returns null for null", () => {
    expect(formatLongDate(null)).toBeNull();
  });
  it("returns null for undefined", () => {
    expect(formatLongDate(undefined)).toBeNull();
  });
  it("formats a date string with day, month, and year", () => {
    const result = formatLongDate("2024-06-15T00:00:00Z");
    expect(result).toContain("2024");
    expect(result).toContain("15");
  });
});
