const express = require("express")
const { chatBot } = require("../controllers/chatComplitionController")
const router = express.Router()

router.post('/chat',chatBot)

module.exports = router