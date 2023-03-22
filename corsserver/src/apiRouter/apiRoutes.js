const { Router } = require("express")
const { apiSearch } = require("./apiControler")
const apiRouter = Router();

apiRouter.get("/weatherLocation/:search", apiSearch);
module.exports = apiRouter;