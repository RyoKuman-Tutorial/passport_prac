import express, { Request, Response } from "express";
import session from "express-session";
import { User } from "./types/session";
import f from "session-file-store";
import {} from "passport-local";
import passport from "passport";
import login from "./route/login";
import main from "./route/main";

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

app.use("/login", login);
app.use("/", main);

app.listen(3000, () => console.log("hey"));
