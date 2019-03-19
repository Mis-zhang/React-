import React from 'react'
import { Card, Form, Button, Input, Checkbox, Radio, Select, InputNumber, Switch , DatePicker , TimePicker, Upload, Icon, message } from 'antd'
import moment from 'moment'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea

class Register extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      // userimg: 
    }
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg: imageUrl,
        loading: false,
      }));
    }
  }

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue()
    console.log(JSON.stringify(userInfo))
    message.success(`${userInfo.userName} 恭喜您， 您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm:4
      },
      wrapperCol: {
        xs: 24,
        sm: 8
      }
    }

    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 8,
          offset: 4
        }
      }
    }

    return (
      <div>
        <Card title="注册表单" className="form-wrap">
          <Form layout="horizontal">
            <FormItem label="用户名" { ...formItemLayout }>
              {
                  getFieldDecorator('userName', {
                    initialValue: '',
                    rules:[
                      {
                        required: true,
                        message: '用户名不能为空'
                      }
                    ]
                  })(
                      <Input placeholder="请输入用户名" />
                  )
                }
            </FormItem>
            <FormItem label="密码"  { ...formItemLayout }>
              {
                  getFieldDecorator('userPwd', {
                    initialValue: '',
                    rules:[
                      {
                        required: true,
                        message: '密码不能为空'
                      }
                    ]
                  })(
                      <Input type="password" placeholder="请输入密码" />
                  )
                }
            </FormItem>
            <FormItem label="性别"  { ...formItemLayout }>
              {
                  getFieldDecorator('sex', {
                    initialValue: '1',
                  })(
                      <RadioGroup>
                        <Radio value="1">男</Radio>
                        <Radio value="2">女</Radio>
                      </RadioGroup>
                  )
                }
            </FormItem>
            <FormItem label="年龄"  { ...formItemLayout }>
              {
                  getFieldDecorator('age', {
                    initialValue: '25',
                  })(
                      <InputNumber />
                  )
                }
            </FormItem>
            <FormItem label="当前状态"  { ...formItemLayout }>
              {
                  getFieldDecorator('state', {
                    initialValue: '4',
                  })(
                      <Select>
                        <Option value="1">咸鱼一条</Option>
                        <Option value="2">风华浪子</Option>
                        <Option value="3">常伴吾身</Option>
                        <Option value="4">好嗨呦</Option>
                        <Option value="5">大傻逼</Option>
                      </Select>
                  )
                }
            </FormItem>
            <FormItem label="爱好"  { ...formItemLayout }>
              {
                  getFieldDecorator('love', {
                    initialValue: ['7', '12', '13'],
                  })(
                      <Select mode='multiple'>
                        <Option value="1">游泳</Option>
                        <Option value="2">打篮球</Option>
                        <Option value="3">踢足球</Option>
                        <Option value="4">跑步</Option>
                        <Option value="5">爬山</Option>
                        <Option value="6">吃饭</Option>
                        <Option value="7">睡觉</Option>
                        <Option value="8">吃鸡</Option>
                        <Option value="9">LOL</Option>
                        <Option value="10">看电视</Option>
                        <Option value="11">看博客</Option>
                        <Option value="12">编程</Option>
                        <Option value="13">改Bug</Option>
                      </Select>
                  )
                }
            </FormItem>
            <FormItem label="是否是人"  { ...formItemLayout }>
              {
                  getFieldDecorator('isMarried', {
                    valuePropName: 'checked',
                    initialValue: true
                  })(
                      <Switch />
                  )
                }
            </FormItem>
            <FormItem label="生日"  { ...formItemLayout }>
              {
                  getFieldDecorator('birthday', {
                    // initialValue: moment('2019-03-18 17:48')
                  })(
                      <DatePicker 
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                      />
                  )
                }
            </FormItem>
            <FormItem label="联系地址"  { ...formItemLayout }>
              {
                  getFieldDecorator('address', {
                    initialValue:'北京市朝阳区望京SOHO A座 北京爱种网络科技有限公司'
                  })(
                      <TextArea 
                        autosize={
                          { minRows: 3,
                            maxRows: 10
                          }
                        }
                      />
                  )
                }
            </FormItem>
            <FormItem label="早起时间"  { ...formItemLayout }>
              {
                  getFieldDecorator('time')( <TimePicker /> )
                }
            </FormItem>
            <FormItem label="头像"  { ...formItemLayout }>
              {
                  getFieldDecorator('userImg')(
                      <Upload
                        listType="picture-card"
                        showUploadList={ false }
                        action="//jsonplaceholder.typicode.com/posts/"
                        onChange={ this.handleChange }
                      >
                        { this.state.userImg ? <img src={ this.state.userImg } /> : <Icon type="plus" /> }
                      </Upload>
                  )
                }
            </FormItem>
            <FormItem { ...offsetLayout } >
              {
                  getFieldDecorator('userImg')(
                     <Checkbox>我已阅读<a href="#">悟空协议</a></Checkbox>
                  )
                }
            </FormItem>
            <FormItem { ...offsetLayout } >
              <Button type="primary" onClick={ this.handleSubmit }>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }

}
export default Form.create()(Register)