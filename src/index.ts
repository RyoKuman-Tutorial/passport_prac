import express, { Request, Response } from "express";
import session from "express-session";
import { User } from "./types/session";
import f from "session-file-store";

const app = express();
const FileStore = f(session);
const fileStoreOptions = {};

app.use(express.json());

app.use(
  session({
    secret: "my name is session",
    resave: false,
    saveUninitialized: true,
    store: new FileStore(fileStoreOptions),
  })
);

app.get("/", (req: Request, res: Response) => {
  console.log(req.session);
  if (req.session.user === undefined) {
    const user: User = { id: "hello", email: "hi" };
    req.session.user = user;
  } else req.session.user.id += "1";
  console.log(req.session.user);
  res.send("hello session");
});

app.listen(3000, () => console.log("hey"));
