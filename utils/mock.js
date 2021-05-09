/**
 * @param {number} [length]
 */
export function randomString(length) {
  return Math.random()
    .toString(36)
    .slice(2, length && 2 + length);
}
