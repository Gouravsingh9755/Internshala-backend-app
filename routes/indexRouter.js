const express = require("express");
const { hompage } = require("../controllers/index.controllers");
const router = express.Router();


// GET /
router.get("/", hompage);



module.exports = router;