const mongoose = require("mongoose");
const config = require("../utils/config.js");

const mongoose_connection = mongoose.createConnection(config.MONGOOSE_URL);
const schema_question = new mongoose.Schema(
    {
        "text": { "type": String, required: true },
        "type": { "type": String, enum: ["select_one", "select_multiple"], required: true },
        "answers": [
            {
                "answer": { "type": String, required: true },
                "correct": { "type": Boolean, required: true },
            }
        ]

    })

const model_questions = mongoose_connection.model("question", schema_question);

module.exports = model_questions;
