var express = require('express')
var axios = require('axios')
var fs = require('fs')

var app = express()

app.get('/', (req, res) => {
  res.send('Demo!')
})

const id = Math.floor(Math.random() * 10000000)

setInterval(() => {
  let name = process.env.name || 'No Name'
  let host = fs.existsSync('/host')
    ? fs.readFileSync('/host', 'utf8')
    : 'No Host'

  axios.post('https://k8sdemo.fredriklowenhamn.se/api', { name, host, id })
}, 500)

app.listen(8080)
