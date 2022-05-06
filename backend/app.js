const express = require("express");
const router_questions = require("./controllers/controller_question.js");
const config = require("./utils/config.js");



const express1 = express();


//middlevare
express1.use(express.static("C:\\Users\\Mokinys\\Desktop\\VSCode_bundle\\ivertinimui\\testo_aplikacija\\frontend\\build"))
express1.use(express.json());

express1.use("/api/questions", router_questions);


module.exports = {
    express1
}