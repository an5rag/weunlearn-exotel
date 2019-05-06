import express from "express";
import { Request, Response } from "express";
const app = express();
const { PORT = 3000 } = process.env;
app.get("/", (req: Request, res: Response) => {
  console.log("Got request at /");
  res.send({
    message: "hello Anurag"
  });
});
app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
