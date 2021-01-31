const route = location.search.replace(/^\?/, "")
console.debug(route)
import(`./${route}.js`)
