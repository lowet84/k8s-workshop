import React from 'react'
import dom from 'react-dom'
import { Home } from './Components/Home'
import { Provider, useDispatch } from 'react-redux'
import store from './Store/store'
import { addMessage } from './Store/commonReducer'

var socket = new WebSocket('wss://k8sws.fredriklowenhamn.se')
socket.onmessage = function(event) {
  store.dispatch(addMessage(event.data))
}

dom.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
)
