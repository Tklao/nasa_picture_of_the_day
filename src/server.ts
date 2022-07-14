import bodyParser from "body-parser";
import express from "express";
import router from "./routes/routers";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
  console.log("server running...");
});
