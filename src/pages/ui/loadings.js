import React from 'react'
import { Card, Spin, Icon, Alert } from 'antd';

import './ui.less'

export default class Loading extends React.Component {
  render() {

    const icon = <Icon type="loading" style={{ fontSize: 28 }}/>

    return (
      <div>
          <Card title="Spin用法" className="card-wrap">
            <Spin size="small"></Spin>
            <Spin style={{ margin: '0 20px' }}/>
            <Spin size="large"></Spin>
            <Spin indicator={ icon } style={{ marginLeft: 20 }}/>
          </Card>
          <Card title="内容遮罩" className="card-wrap">
            <Alert 
              message="React"
              description="欢迎来到React高级实战课程"
              type="info"
              style={{ marginBottom:20 }}
            />
            <Spin tip="加载中...">
              <Alert 
                message="React"
                description="欢迎来到React高级实战课程"
                type="info"
                style={{ marginBottom: 20 }}
              />
            </Spin>
            <Spin indicator={ icon }>
              <Alert 
                message="React"
                description="欢迎来到React高级实战课程"
                type="info"
              />
            </Spin>
          </Card>
      </div>
    )
  }
}