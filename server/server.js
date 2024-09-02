const path = require("path");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const { logDBConnectionDetails } = require("./utils/environment-helper");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// cors middleware adds CORS headers to calls, without which the calls from the client port (5173) are rejected by the server (on 3001)
app.use(cors());
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  // call helper function to log DB variables used in connection
  logDBConnectionDetails();
  app.listen(PORT, () => console.log("Now listening on port", PORT));
});
