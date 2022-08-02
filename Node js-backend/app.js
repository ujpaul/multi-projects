import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import userRouter from "./src/routes/userRoute";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRouter);
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server port is running on ${server.address().port}`);
});
