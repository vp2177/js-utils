export function _getRoute() {
  return location.search.replace(/^\?/, "");
}

import(`./${_getRoute() || "demo"}.js`).then((mod) => mod.__init());
