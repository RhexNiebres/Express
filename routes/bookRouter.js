const { Router } = require("express");

const booksRouter = Router();

booksRouter.get("/", (req, res) => res.send("ALL Books"));
booksRouter.get("/:booksId", (req, res) => {
  const { booksId } = req.params;
  res.send(`Books Id: ${booksId}`);
});

module.exports = booksRouter;
