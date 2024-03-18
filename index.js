const express = require("express");

const port = 3000;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/bfhl", (req, res) => {
  const info = req.body.data;
  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    odd_numbers: info.filter((num) => num % 2 !== 0),
    even_numbers: info.filter((num) => num % 2 === 0),
    alphabets: info
      .filter((val) => typeof val === string)
      .map((val) => {
        val.toUpperCase();
      }),
  };
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server running at port : ${port}`);
});
