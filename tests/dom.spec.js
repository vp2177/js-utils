import { describe, it, expect } from "@jest/globals";
import { appendRoot } from "../append-root.js";

describe("DOM utils", () => {
  it("appendRoot()", () => {
    const el = appendRoot()
    expect(el). toBeInstanceOf(HTMLElement); 

    const id = Math.random().toString(36) 
    el.id = id
    expect(document. getElementById(id)).toBe(el)
  });
});
