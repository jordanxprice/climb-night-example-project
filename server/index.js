givar express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var cors = require('cors');

//custom file
var controller = require('./controller.js');


var app = express();

var corsOptions = {
  origin: true,
  credentials: true
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

//Internal Routes
app.get('/jokes', (req, res) => {

  axios.get(`http://api.icndb.com/jokes/random`).then((response) => {
    res.send(response.data);
  })
  .catch(err => {
    console.log('this is the err', err)
  })

})

app.post('/jokes/submit', (req, res) => {
  var frontEndJoke = req.body.joke;
  controller.joke = frontEndJoke;
  res.send(controller);
})


app.listen(3000, () => {
  console.log('Listening on port 3000')
})
