/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
// TODO Google auth implementation
// const authRoutes = require("./auth-routes.js");
// TODO are homeRoutes replaced entirely by React?
// const homeRoutes = require("./home-routes.js");
const apiRoutes = require("./api");

// TODO Google auth implementation
// router.use("/auth", authRoutes);
router.use("/api", apiRoutes);
// TODO are homeRoutes replaced entirely by React?
// router.use("/", homeRoutes);

///////////STUBS
const url = ""

// TODO remove this. It's here only for development, verifying the connections between things step-by-step
router.get("/", async (req, res) => {
  const stubString = `received ${req.method} at ${url}${req.url} `;
  console.log(stubString);
  res.status(200).json(stubString);
});

/* EXPORTS */
module.exports = router;
