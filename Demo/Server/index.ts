import { Server } from 'ws'
import WebSocket = require('ws')
import express from 'express'
import bodyParser from 'body-parser'

const wss = new Server({ port: 8080 })

var app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.post('/api', (req, res) => {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(req.body))
    }
  })
  res.send('ok')
})

app.listen(8081)
