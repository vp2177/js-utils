const route = location.search.replace(/^\?/, "") || "demo"
import(`./${route}.js`)
