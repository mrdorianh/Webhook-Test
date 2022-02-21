const express = require("express")
const bodyParser = require("body-parser")
// Initialize express and define a port
const app = express()

const init = (port = 3000) => {
  // Require express and body-parser

  const PORT = port
  // Tell express to use body-parser's JSON parsing
  app.use(bodyParser.json())

  app.get('/', function(req, res) {
    res.send({ title: 'Webhook reciever' });
  });


  // Start express on the defined port
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
}

const addslug = (slugName, callback) => {
  app.post(`/${slugName}`, (req, res) => {
    // console.log(req.body) // Call your action on the request here

    //Send a message back to poster if you want.
    res.send(`POST Successful:\n${JSON.stringify(req.body, null, '\t')}`)

    res.status(200).end() // Responding is important

    // eventEmitter.emit('post', req.body);
    callback(req.body);
  })
}

exports.init = init;
exports.addslug = addslug;
