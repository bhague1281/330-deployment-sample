const express = require("express");
const router = express.Router();

router.use("/items", require('./items'));

console.log(__dirname + '/../deployment-sample-frontend/dist');
router.use(express.static(__dirname + '/../deployment-sample-frontend/dist'));

// router.get("/", (req, res, next) => {
//   res.send(`
//     <html>
//       <body>
//         <h1> Hello, world! </h1>
//         <p>Welcome to the Express server!</p>
//       </body>
//     </html>
//   `)
// });

module.exports = router;