import cors from "cors";
import express from "express";
import env from "dotenv";
env.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.listen(process.env.PORT, () => {
  console.log("server is running at ", process.env.PORT);
});
