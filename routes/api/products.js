let express = require("express");
let router = express.Router();
const path = require("path");
const controller = require("../../controllers/api/apiProductsController");

router.get("/", controller.productList)

module.exports = router;