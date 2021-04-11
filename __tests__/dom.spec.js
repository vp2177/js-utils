import { describe, it, expect } from "@jest/globals";
import { appendRoot } from "../append-root.js";
import { _getRoute } from "../demo-router.js";

describe("DOM utils", () => {
  it("appendRoot() return value", () => {
    expect( appendRoot()). toBeInstanceOf(HTMLElement);
  });
  it("appendRoot() appends", () => {
    appendRoot("select");

    expect(document.querySelector("select") ).toBeDefined()
  });

  it("demo-router's route", () => {

    expect(_getRoute() ).toBe("foo")
  });


});
