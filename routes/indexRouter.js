const { Router } = require("express")

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("This is the indexPage"));

module.exports = indexRouter;