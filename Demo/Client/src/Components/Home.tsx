import React, { useState, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { getGroupedMessages } from '../Store/commonReducer'
import Card from 'antd/es/card'
import Layout from 'antd/es/layout'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import { randomColors } from '../colors'

const hashCode = function(str: string) {
  var hash = 0,
    i,
    chr
  if (str.length === 0) return hash
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0
  }
  return Math.abs(hash)
}

const colorFromString = (str: string) => {
  var index = hashCode(str.toString()) % randomColors.length
  return randomColors[index]
}

export const Home = () => {
  var messages = useSelector(getGroupedMessages)
  return (
    <Layout style={{ background: '#c4c4c4', minHeight: '100vh' }}>
      <Layout.Content style={{ margin: '16px' }}>
        <Row gutter={16}>
          {messages.map((message, index) => (
            <Col key={index} md={12} lg={6} style={{ marginBottom: '16px' }}>
              <Card
                title={message.name}
                style={{
                  height: '250px',
                  border: `5px solid ${colorFromString(message.name)}`
                }}
              >
                {message.hosts.map((host, hindex) => (
                  <div key={hindex}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      {host.host}:
                      {host.ids.map((id, iindex) => (
                        <div
                          key={iindex}
                          style={{
                            margin: '5px',
                            width: '10px',
                            height: '10px',
                            background: colorFromString(id.id)
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </Card>
            </Col>
          ))}
        </Row>
      </Layout.Content>
    </Layout>
  )
}
