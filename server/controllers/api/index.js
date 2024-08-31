/* DEPENDENCIES */
const router = require("express").Router();

/* ROUTES */
// const locationRoutes = require("./location-routes.js");
// const eventRoutes = require("./event-routes.js");
// const eventSeriesRoutes = require("./eventSeries-routes.js");
// const communityRoutes = require("./community-routes.js");
// const userRoutes = require("./user-routes");
// const providerRoutes = require("./provider-routes");

// router.use("/locations", locationRoutes);
// router.use("/events", eventRoutes);
// router.use("/eventSeries", eventSeriesRoutes);
// router.use("/locations", locationRoutes);
// router.use("/users", userRoutes);
// router.use("/communities", communityRoutes);
// router.use("/providers", providerRoutes);

///////////STUBS
const url = "/api"

router.get("/", async (req, res) => {
  const stubString = `received ${req.method} at ${url}${req.url} `;
  console.log(stubString);
  res.status(200).json(stubString);
});

/* EXPORTS */
module.exports = router;
