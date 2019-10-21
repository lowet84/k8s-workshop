const express = require('express')
const axios = require('axios')
const fs = require('fs')

const app = express()

const id = Math.floor(Math.random() * 10000000)
const name = process.env.name || 'No Name'
const host = fs.existsSync('/host')
  ? fs.readFileSync('/host', 'utf8')
  : 'No Host'
const data = { name, host, id }

app.get('/', (req, res) => {
  let ret = `
    <html>
      <head>
        <title>K8S Demo - ${name}</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <style>
          .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
          }
          body {
            background: #262626;
            color: white;
            font-family: 'Roboto', sans-serif;
            font-size: 4vw;
          }
          h1{

          }
        </style>
      </head>
      <body>
        <div class="info">
          <h1>${name}</h1>
          <h2>${host}</h2>
          <h3>${id}</h3>
        </div>
      </body>
    </html>
  `
  res.send(ret)
})
app.get('/data', (req, res) => {
  res.send(data)
})


setInterval(() => {
  axios
    .post('https://k8sdemo.fredriklowenhamn.se/api', data)
    .catch(message => console.log(message))
}, 500)

app.listen(8080)
