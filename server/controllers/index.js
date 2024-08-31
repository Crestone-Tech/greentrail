/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
// const authRoutes = require("./auth-routes.js");
// const homeRoutes = require("./home-routes.js");
const apiRoutes = require("./api");

// router.use("/auth", authRoutes);
router.use("/api", apiRoutes);
// router.use("/", homeRoutes);

///////////STUBS
const url = ""

router.get("/", async (req, res) => {
  const stubString = `received ${req.method} at ${url}${req.url} `;
  console.log(stubString);
  res.status(200).json(stubString);
});

/* EXPORTS */
module.exports = router;
