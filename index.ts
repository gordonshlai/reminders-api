import express from "express";
import remindersRouter from "./routers/reminders";
const app = express();

app.use(express.json()); // parse req.body into json object
app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(8000, () => console.log("Server started"));
