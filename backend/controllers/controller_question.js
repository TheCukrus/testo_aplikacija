const express = require("express");
const model_questions = require("../models/model_questions.js");

const router_questions = express.Router()

router_questions.post("/", async (req, res) =>
{
    if (req.body.text === undefined)
    {
        res.statusCode = 400;
        res.end();
        return;
    }

    if (req.body.type === undefined)
    {
        res.statusCode = 400;
        res.end();
        return;
    }

    if (req.body.answers === undefined)
    {
        res.statusCode = 400;
        res.end();
        return;
    }

    if ((req.body.answers instanceof Array) === false)
    {
        res.statusCode = 400;
        res.end();
        return;
    }

    try
    {
        const result1 = await model_questions.create(
            {
                "text": req.body.text,
                "type": req.body.type,
                "answers": req.body.answers
            });

        if (result1 === null)
        {
            res.statusCode = 400;
            res.end();
            return;
        }

        res.statusCode = 201;
        res.end();
    }
    catch (err)
    {
        res.statusCode = 400;
        res.end();
    }
})

module.exports = router_questions;