const express = require("express");
const model_user = require("../models/model_user");

const router_login = express.Router()

router_login.post("/", async (req, res) =>
{

    try
    {
        const result1 = await model_user.findOne({ "user_name": req.body.user_name });

        if (result1.user_name !== req.body.user_name)
        {
            res.statusCode = 400;
            res.end();
            return;
        }

        if (result1.password !== req.body.password)
        {
            res.statusCode = 400;
            res.end();
            return;
        }

        const result2 = await model_user.findOneAndUpdate(req.body.user_name, { "token": "admin_token" })
        res.statusCode = 200;
        res.cookie("token", "admin_token");
        res.end();
    }
    catch (err)
    {
        res.statusCode = 400;
        res.end();
    }
})

router_login.get("/", async (req, res) =>
{
    if (req.cookies.token === undefined)
    {
        res.statusCode = 400;
        res.end();
    }

    try
    {
        const result1 = await model_user.findOne({ "token": req.cookies.token })

        if (result1 === null)
        {
            res.statusCode = 400;
            res.end();
        }

        res.statusCode = 200;
        res.json({ "user_name": result1.user_name });
    }
    catch (err)
    {

    }
})



module.exports = router_login;