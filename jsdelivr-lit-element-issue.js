import * as L from "https://cdn.jsdelivr.net/npm/lit-element@2.4/+esm";
// import * as L from "https://cdn.skypack.dev/lit-element@2.4";
import { appendRoot } from "./append-root.js";

export
class A extends L.LitElement {
  render() {
    // TODO: Renders [object Object] when loaded from jsDelivr
    const res = L.html`<mark>Lit</mark>`;
    console.debug(res);
    return res;
  }
}
customElements.define("my-a", A);

export function __init() {
  appendRoot("my-a"); 

}


