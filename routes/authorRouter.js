const { Router } = require("express")

const { getauthorById } = require("../controllers/authorController")//import controller
const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("ALL authors"));
authorRouter.get("/:authorId", getauthorById);

// authorRouter.get("/:authorId", (req, res) => {
//     const { authorId } = req.params;
//     res.send(`Author Id: ${authorId}`)
// });

module.exports = authorRouter;