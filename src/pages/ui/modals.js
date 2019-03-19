import React from 'react'
import { Card, Button, Modal } from 'antd';

import './ui.less'

export default class Modals extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
    }
  }

  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }

  handleConfirm= (type) => {
    Modal[type]({
      title: '确认',
      content: '你确定你学会 React 了吗',
      onOk() {
        console.log('Ok')
      },
      onCancel() {
        console.log('cancel')
      }
    })
  }

  render() {
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={ () => this.handleOpen('showModal1') }>Open</Button>
          <Button type="primary" onClick={ () => this.handleOpen('showModal2') }>自定义页脚</Button>
          <Button type="primary" onClick={ () => this.handleOpen('showModal3') }>顶部20px弹框</Button>
          <Button type="primary" onClick={ () => this.handleOpen('showModal4') }>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={ () => this.handleConfirm('confirm') }>Confirm</Button>
          <Button type="primary" onClick={ () => this.handleConfirm('info') }>Info</Button>
          <Button type="primary" onClick={ () => this.handleConfirm('success') }>Success</Button>
          <Button type="primary" onClick={ () => this.handleConfirm('warning') }>Waining</Button>
        </Card>
        <Modal 
          title="React"
          visible={ this.state.showModal1 }
          onCancel={ () => {
            this.setState({
              showModal1: false
            })
          } }
        >
          <p>欢迎慕课退出的 React 高级课程</p>
        </Modal>
        <Modal 
          title="React"
          visible={ this.state.showModal2 }
          okText="下一步"
          cancelText="算了"
          onCancel={ () => {
            this.setState({
              showModal2: false
            })
          } }
        >
          <p>欢迎慕课退出的 React 高级课程</p>
        </Modal>
        <Modal 
          title="React"
          style={{ top: 20 }}
          visible={ this.state.showModal3 }
          onCancel={ () => {
            this.setState({
              showModal3: false
            })
          } }
        >
          <p>欢迎慕课退出的 React 高级课程</p>
        </Modal>
        <Modal 
          title="React"
          wrapClassName="vertical-center-modal"
          visible={ this.state.showModal4 }
          onCancel={ () => {
            this.setState({
              showModal4: false
            })
          } }
        >
          <p>欢迎慕课退出的 React 高级课程</p>
        </Modal>
      </div>
    )
  }

}