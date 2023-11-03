const express = require("express");
const app = express();
app.use(express.json());

const { connection } = require("./db");
const { bookRouter } = require("./routes/book.routes");

require("dotenv").config();
const port = process.env.PORT;

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use("/books", bookRouter);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "WElCOME TO BOOK-STORE BASE POINT" });
});

app.all("*", (req, res) => {
  res.status(404).send("Invalid Endpoint");
});

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to DB sccuessfully");
    console.log(`Server is Running at ${port}`);
  } catch (error) {
    console.log("Error while connecting to DB");
    console.log(error);
  }
});
