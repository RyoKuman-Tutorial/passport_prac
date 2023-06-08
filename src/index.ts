import express from "express";
import session from "express-session";
import f from "session-file-store";
import passport from "passport";

import login from "./route/login";
import main from "./route/main";
import passportConfig from "./passport";

const app = express();
const FileStore = f(session);
const fileStoreOptions = {};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "my name is session",
    resave: false,
    saveUninitialized: true,
    store: new FileStore(fileStoreOptions),
  })
);

app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use("/login", login);
app.use("/", main);

app.listen(3000, () => console.log("hey"));
