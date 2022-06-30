//npm i http-status-codes
const express = require("express")

const router = express.Router();

const usersController = require('../controllers/users.controller')

router.post("/signup", usersController.signUp);

router.post("/login", usersController.login);

module.exports = router;