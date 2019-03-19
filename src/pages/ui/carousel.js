import React from 'react'
import {Card, Carousel} from 'antd'

import './ui.less'

export default class Carousels extends React.Component{

  constructor(props) {
    super(props) 
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <Card title="图片背景轮播" className="card-wrap">
          <Carousel autoplay={ true }>
            <div><h3>Ant Motion Banner - React</h3></div>
            <div><h3>Ant Motion Banner - Vue</h3></div>
            <div><h3>Ant Motion Banner - Angular</h3></div>
          </Carousel>
        </Card>
      </div>
    )
  }

}