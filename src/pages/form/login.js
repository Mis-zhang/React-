import React from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'

import './form.less'

const FormItem = Form.Item

class FromLogin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err, values) => {
      if(!err) {
        message.success(`${userInfo.userName} 恭喜您， 您通过本次表单组件学习，当前密码为：${userInfo.password}`)

      }
    })
  }

  render() {

    const { getFieldDecorator } = this.props.form

    return (
      <div>
        <Card title="登录行内表单" className="form-wrap">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单" className="form-wrap">
          <Form 
          layout="horizontal"
          style={{width: 300}}
          >
            <FormItem>
              {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules:[
                    {
                      required: true,
                      message: '用户名不能为空'
                    },
                    {
                      min: 5,
                      max: 10,
                      message: '长度不在范围内'
                    },
                    // {
                    //   pattern: /^\w+$/g,
                    //   message:'用户名必须为英文字母或数字'
                    // },
                    {
                      pattern: new RegExp('^\\w+$', 'g'),
                      message: '用户名必须为英文字母或数字'
                    }
                  ]
                })(
                    <Input placeholder="请输入用户名" prefix={ <Icon type="user" /> } />
                )
              }
            </FormItem>
            <FormItem>
            {
                getFieldDecorator('password', {
                  initialValue: '',
                  rules:[
                    {
                      required: true,
                      message: '密码不能为空'
                    }
                  ]
                })(
                    <Input placeholder="请输入密码" prefix={ <Icon type="lock" /> } />
                )
              }
            </FormItem>
            <FormItem>
            {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                    <Checkbox>记住密码</Checkbox>  
                )
              }
              <a href="#" style={{ float: 'right' }}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={ this.handleSubmit }>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(FromLogin)