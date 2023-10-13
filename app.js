const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");

var app = express();
const port = process.env.PORT || 8080

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

app
  .use(bodyParser.json())
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes/index"));

mongodb.connectDB ((err) => {
  if(err) {
    console.log(err)
  } else {
    app.listen(port);
    console.log(`Connected to the DB and listening on ${port}`)
  }
});