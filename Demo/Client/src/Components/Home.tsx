import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getMessages } from '../Store/commonReducer'

export const Home = () => {
  var messages = useSelector(getMessages)
  return <div>{JSON.stringify(messages)}</div>
}
