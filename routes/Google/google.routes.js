const GoogleRouter = require("express").Router();
const passport = require("passport");

GoogleRouter.get(
  "/",
  passport.authenticate("google", {
    scope: ["email", "profile"],
    session: false,
  })
);

// Auth Callback
GoogleRouter.get(
  "/callback",
  passport.authenticate("google", {
    session: false,
    successRedirect: "/auth/callback/success",
    failureRedirect: "/auth/callback/failure",
  })
);

// Success
GoogleRouter.get("/callback/success", (req, res) => {
  console.log(req.user, "hello");
  res.json(req.session.user);
});

// failure
GoogleRouter.get("/auth/callback/failure", (req, res) => {
  res.send("Error");
});

module.exports = GoogleRouter;
