const express = require('express');
const port = 5000 || process.env.PORT;
const app = express();
const cors = require('cors');
const request = require('request');
require('dotenv').config();


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello')
});

app.get('/jobs', (req, res) => {
  console.log("here")
  const url = `https://api.ziprecruiter.com/jobs/v1?search=${req.query.jobSearch}&location=${req.query.location}&radius_miles=${req.query.radius_miles}&days_ago=${req.query.days_ago}&api_key=${process.env.ZIP_API}`;
  console.log(url);
  request(
    url,
    (error, result) => {
      if (error) {
        return console.log(error);
      }
      res.status(200).send(result.body);
    }
  )
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`)
});