const { Router } = require("express");
const router = Router();

router.use("/items", require('./items'));
router.get("/", (req, res, next) => {
  res.send(`
    <html>
      <body>
        <h1> Hello, world! </h1>
        <p>And all who inhabit it.</p>
        <p>Welcome to the Express server!</p>
      </body>
    </html>
  `)
});

module.exports = router;