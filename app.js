const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter")
const booksRouter = require("./routes/bookRouter")

app.use("/authors", authorRouter);
app.use("/books", booksRouter);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
