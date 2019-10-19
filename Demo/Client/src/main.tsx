import React from 'react'
import dom from 'react-dom'
import { Home } from './Components/Home'
import { Provider, useDispatch } from 'react-redux'
import store from './Store/store'
import { addMessage, clearOldMessages } from './Store/commonReducer'
import 'antd/dist/antd.css'

var socket = new WebSocket('wss://k8sws.fredriklowenhamn.se')
socket.onmessage = function(event) {
  store.dispatch(addMessage(JSON.parse(event.data)))
}

setInterval(async () => {
  store.dispatch(clearOldMessages())
}, 100)

dom.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
)
