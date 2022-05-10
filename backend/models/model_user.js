const mongoose = require("mongoose");
const config = require("../utils/config.js");

const mongoose_connection = mongoose.createConnection(config.MONGOOSE_URL);
const schema_user = new mongoose.Schema(
    {
        "user_name": { "type": String, required: true },
        "password": { "type": String, minlength: 8, required: true },
        "token": { "type": String }

    })

const model_user = mongoose_connection.model("user", schema_user);

module.exports = model_user;
