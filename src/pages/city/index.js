import React from 'react'

import axios from './../../axios/index'
import Utils from './../../utils/utils'
import { Card, Table, Form, Modal, Button, message, Select } from 'antd';
const FormItem = Form.Item
const Option = Select.Option

export default class City extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  params = {
    page: 1
  }

  componentDidMount() {
    this.requestList()
  }

  requestList = () => {
    let _this = this
    axios.ajax({
      url: '/open_city',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res) => {
      console.log(res);
      this.setState({
        list: res.result.item_list.map((item, index) => {
          item.key = index
          return item
        }),
        pagination: Utils.pagination(res, (current) => {
          _this.params.page = current
          _this.requestList()
        })
      })
    })
  }

  handleOpenCity = () => {

  }

  render() {

    const columns = [
      {
        title: '城市ID',
        dataIndex: 'id'
      }, {
        title: '城市名称',
        dataIndex: 'name'
      }, {
        title: '用车模式',
        dataIndex: 'mode',
      }, {
        title: '营运模式',
        dataIndex: 'op_mode',
      }, {
        title: '授权加盟商',
        dataIndex: 'franchisee_name'
      }, {
        title: '城市管理员',
        dataIndex: 'city_admins',
      }, {
        title: '城市开通时间',
        dataIndex: 'open_time',
      }, {
        title: '操作时间',
        dataIndex: 'update_time',
      }, {
        title: '操作人',
        dataIndex: 'sys_user_name'
      }
    ];

    return (
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card>
          <Button type="primary" onClick={ this.handleOpenCity }>开通城市</Button>
        </Card>
        <Table 
          columns={ columns }
          dataSource={ this.state.list }
        />
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
            getFieldDecorator('city_id')(
              <Select
                style={{width: 100}}
                placeholder="全部"
              >
                <Option value="">全部</Option>
                <Option value="1">北京市</Option>
                <Option value="2">天津市</Option>
                <Option value="3">深圳市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="用车模式">
          {
            getFieldDecorator('mode')(
              <Select
                style={{width: 120}}
                placeholder="全部"
              >
                <Option value="">全部</Option>
                <Option value="1">指定停车点模式</Option>
                <Option value="2">禁停区模式</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="营运模式">
          {
            getFieldDecorator('op_mode')(
              <Select
                style={{width: 80}}
                placeholder="全部"
              >
                <Option value="">全部</Option>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="加盟商授权状态">
          {
            getFieldDecorator('auth_status')(
              <Select
                style={{width: 100}}
                placeholder="全部"
              >
                <Option value="">全部</Option>
                <Option value="1">已授权</Option>
                <Option value="2">未授权</Option>
              </Select>
            )
          }
        </FormItem>

        <FormItem>
          <Button type="primary" style={{margin: '0 20px'}}>查询</Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    );
  }

}

FilterForm = Form.create({})(FilterForm);