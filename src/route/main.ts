import { Router, Request, Response } from "express";

const main = Router();

main.get("/", (req: Request, res: Response) => {
  res.sendFile("/Users/ryokuman/Desktop/dev/2.study/passport/src/static/main.html");
});

export default main;
