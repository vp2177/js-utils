// import * as L from "https://cdn.jsdelivr.net/npm/lit-element@2.4/+esm";
// import * as L from "https://cdn.skypack.dev/lit-element@2.4";
import * as H from "https://cdn.jsdelivr.net/npm/lit-html@1.3/+esm"
import {appendRoot} from "./append-root"


H.render(H.html`<h2>Lit HTML</h2>`, appendRoot())



/*
class A extends L.LitElement {
  render() {
    return L.html`<h2>Lit</h2>`; // TODO: Renders [object Object] when loaded from jsDelivr?
  }
}
customElements.define("my-a", A);
 
appendRoot("my-a")
*/



