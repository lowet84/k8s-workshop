var express = require('express')
var axios = require('axios')
var fs = require('fs')

var app = express()

const id = Math.floor(Math.random() * 10000000)
const name = process.env.name || 'No Name'
const host = fs.existsSync('/host')
  ? fs.readFileSync('/host', 'utf8')
  : 'No Host'
const data = { name, host, id }

app.get('/', (req, res) => {
  res.send(data)
})

setInterval(() => {
  axios.post('https://k8sdemo.fredriklowenhamn.se/api', data)
}, 500)

app.listen(8080)
