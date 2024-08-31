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
router.get("/", async (req, res) => {
  console.log("here we are");
  res.status(200).json("called the route stub");
});

/* EXPORTS */
module.exports = router;
