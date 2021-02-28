import { describe, it, expect } from "@jest/globals";
import { popAtRandom } from "../random";

describe("Basis", () => {
  it("popAtRandom()", () => {
    const a = [1, 2, 3, 4];
    expect(typeof popAtRandom(a)).toBe("number");
    expect(a).toHaveLength(3);

    expect(popAtRandom([])).toBeUndefined();
  });
});
