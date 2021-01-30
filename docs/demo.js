import * as L from "https://cdn.jsdelivr.net/npm/lit-element@2.4/+esm"
// import * as P from "https://cdn.jsdelivr.net/npm/preact@10.5" // TODO: /compat?
import {appendRoot} from "https://cdn.jsdelivr.net/gh/vp2177/js-utils/append-root.min.js"


class A extends L.LitElement {
 render() {
     return L.html`<h2>Lit</h2>` // TODO: [object Object]?
 }
}
customElements.define("my-a", A);







