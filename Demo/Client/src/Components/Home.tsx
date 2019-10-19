import React, { useState, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { getGroupedMessages } from '../Store/commonReducer'
import Card from 'antd/es/card'
import Layout from 'antd/es/layout'
import Row from 'antd/es/row'
import Col from 'antd/es/col'

export const Home = () => {
  var messages = useSelector(getGroupedMessages)
  return (
    <Layout style={{ background: '#c4c4c4' }}>
      <Layout.Content style={{ margin: '16px' }}>
        <Row gutter={16}>
          {messages.map((message, index) => (
            <Col key={index} md={12} lg={6} style={{ marginBottom: '16px' }}>
              <Card title={message.name}>
                {message.hosts.map((host, hindex) => (
                  <div key={hindex}>
                    <div>{host.host}</div>
                    <div>
                      {host.ids.map((id, iindex) => (
                        <div key={iindex} style={{ marginLeft: '5px' }}>
                          {id.id}
                        </div>
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
