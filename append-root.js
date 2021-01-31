export function appendRoot(tag = "div") {
  return document.body.appendChild(document.createElement(tag));
}
