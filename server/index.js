const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller');

const app = express();
app.use(bodyParser.json());

const port = 3001;

//const messagesBaseUrl = "/api/messages"; //We make this variable in case the URL ever changes
app.post( "/api/messages", mc.create )
app.get ( "/api/messages", mc.read )
app.put ( "/api/messages/:id", mc.update )
app.delete ( "/api/messages/:id", mc.delete )

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});