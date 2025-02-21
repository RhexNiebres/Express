const asyncHandler = require("express-async-handler");


const db = require("../db");

const getAuthorById = asyncHandler(async(req, res) => {
  const { authorId } = req.params;


  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }
});


module.exports = { getAuthorById };
