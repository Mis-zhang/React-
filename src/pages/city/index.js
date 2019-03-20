import React from 'react'

import axios from './../../axios/index'
import Util from './../../utils/utils'
import { Card, Form, Input } from 'antd';
const FormItem = Form.Item

export default class City extends React.Component{

  render() {
    return (
      <div>
        <Card>
          
        </Card>
      </div>
    )
  }

}

class FilterForm extends React.Component {

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="inline">
        <FormItem label="城市">
          {
            
          }
        </FormItem>
      </Form>
    )
  }

}