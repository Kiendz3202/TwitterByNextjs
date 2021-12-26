// module.exports = {
//   images: {
//     domains: ["firebasestorage.googleapis.com"],
//   },
// }
const withTM = require("next-transpile-modules")([
  "react-leaflet",
  "@react-leaflet/core",
]);

module.exports = withTM({
  future: {
    webpack5: true
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
}); 
