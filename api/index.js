import express from "express";
import moongoose from "moongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();
const app = express();
moongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb connnected");
  })
  .catch((err) => {
    console.log("not connected");
  });
app.listen(3000, () => {
  console.log("server listening on");
});
app.use("/api/user", userRoutes);
