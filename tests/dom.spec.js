import { describe, it, expect } from "@jest/globals";
import { appendRoot } from "../append-root.js";

describe("DOM utils", () => {
  it("appendRoot()", () => {
    const el = appendRoot()
    expect(el). toBeInstanceOf(HTMLElement); 

    const id = "TODO: Make this random"
    el.id = id
    expect(document. getElementById(id)).toBe(el)
  });
});
