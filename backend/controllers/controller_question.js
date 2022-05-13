const express = require("express");
const model_questions = require("../models/model_questions.js");
const model_user = require("../models/model_user.js");

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
        const result0 = await model_user.findOne({ "token": req.cookies.token })

        if (result0 === null)
        {
            res.statusCode = 400;
            res.end();
            return;
        }


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

router_questions.get("/", async (req, res) =>
{
    try
    {
        const result = await model_questions.find()

        if (result instanceof Array === false)
        {
            res.statusCode = 400;
            res.end();
        }

        res.statusCode = 200;
        res.json(result);
    }
    catch (err)
    {
        res.statusCode = 400;
        res.end();
    }
})

router_questions.delete("/:id", async (req, res) =>
{
    if (req.params.id === undefined)
    {
        res.statusCode = 400;
        res.end();
        return
    }

    try
    {
        const result1 = await model_questions.findByIdAndDelete(req.params.id);
        res.statusCode = 200;
        res.end();
    }
    catch (err)
    {
        res.statusCode = 400;
        res.end();
    }
})

router_questions.put("/:id", async (req, res) =>
{
    if (req.params.id === undefined)
    {
        res.statusCode = 400;
        res.end();
        return;
    }

    if (req.body.text === undefined)
    {
        res.statusCode = 400;
        res.end();
        return;
    }

    try
    {

        const result0 = await model_user.findOne({ "token": req.cookies.token })

        if (result0 === null)
        {
            res.statusCode = 400;
            res.end();
            return;
        }


        const result1 = await model_questions.findByIdAndUpdate(req.params.id,
            {
                "text": req.body.text,
                "type": req.body.type,
                "answers": req.body.answers
            })

        res.statusCode = 200;
        res.end();
    }
    catch (err)
    {
        res.statusCode = 400;
        res.end();
    }
})

module.exports = router_questions;