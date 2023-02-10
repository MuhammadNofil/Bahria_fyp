const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("./passport/JwtStrategy");
require("./passport/GoogleStartegy");
const app = express();
// require("./passport/GoogleStartegy");
const session = require("express-session");

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

//implementing cors
app.use(cors({ origin: true, credentials: true }));
// app.use(cors())
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

const UserRouter = require("./routes/User/user.routes");
const SessionRouter = require("./routes/User/UserSession.routes");
const QuestionRouter = require("./routes/Questions/question.routes");
const TextAnswer = require("./routes/TextAnswer/textanswer.routes");
const ChartRouter = require("./routes/ChartAnswer/chartanswer.routes");
const FlowchartRouter = require("./routes/FlowChart/flowchart.routes");
const DrwaingRouter = require("./routes/Drwaing/drawing.routes");
const ForgetPassword = require("./routes/ForgetPassword/forgetpass.routes");
const GoogleRouter = require("./routes/Google/google.routes");

app.get("/", (req, res) => {
  res.send("api working");
});
app.use("/user/", UserRouter);
app.use("/user/login", SessionRouter);
app.use("/auth/", GoogleRouter);
app.use("/question/", QuestionRouter);
app.use("/textanswer/", TextAnswer);
app.use("/chartanswer/", ChartRouter);
app.use("/flowchart/", FlowchartRouter);
app.use("/drawing/", DrwaingRouter);
app.use("/", ForgetPassword);

module.exports = app;
