const route = location.search.replace(/^\?/, "") || "demo";
import(`./${route}.js`).then((mod) => mod.__init());
