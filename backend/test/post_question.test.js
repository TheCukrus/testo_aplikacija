const jest = require("jest");
const model_questions = require("../models/model_questions");


description("post request", () =>
{

    test("create request", async () =>
    {
        const result1 = await model_questions.create(
            {
                "text": "laikinas",
                "type": "select_one",
                "answers":
                    [
                        {
                            "answers": "laikinas klausimo variantas",
                            "correct": false
                        }]
            })

        expect(result1.statusCode).toEqual(201);
    })
})