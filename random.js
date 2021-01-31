export function popAtRandom(a = []) {
  const i = Math.round(Math.random() * (a.length - 1));
  return a.splice(i, 1)[0];
}
