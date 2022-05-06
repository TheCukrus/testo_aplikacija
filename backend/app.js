const express = require("express");
const router_questions = require("./controllers/controller_question.js");



const express1 = express();

//db


//middlevare
express1.use(express.static("build"))
express1.use(express.json());

express1.use("/api/questions", router_questions);


module.exports = {
    express1
}