const app = require("./app.js");
const config = require("./utils/config.js")

app.express1.listen(config.LISTENING_PORT, config.LISTENING_NETWORK_CARD_ADRESS, function ()
{
    console.log(`http://${config.LISTENING_NETWORK_CARD_ADRESS}:${config.LISTENING_PORT}`)
})