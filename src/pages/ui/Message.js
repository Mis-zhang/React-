import React from 'react'

import './ui.less'
import { Card , Button, message} from 'antd';

export default class Message extends React.Component{

  showMessage = (type) => {
    message[type]('这是一个AntD的全局提示框')
  }

  render() {
    return (
      <div>
        <Card title="全局提示框" className="card-wrap">
          <Button type="primary" onClick={ () => this.showMessage('success') }>Success</Button>
          <Button type="primary" onClick={ () => this.showMessage('info') }>Info</Button>
          <Button type="primary" onClick={ () => this.showMessage('warning') }>Warning</Button>
          <Button type="primary" onClick={ () => this.showMessage('error') }>Error</Button>
          <Button type="primary" onClick={ () => this.showMessage('loading') }>Loading</Button>
        </Card>
      </div>
    )
  }

}
