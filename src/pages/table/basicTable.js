import React from 'react'
import { Card , Table , Modal, Button, message} from 'antd';
import axios from './../../axios/index'
import './table.less'
import Utils from './../../utils/utils';
export default class BasicTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      dataSource2: []
    }
  }
  
  params = {
    page: 1
  }

  componentWillMount() {
    const data = [
      {
        id: '0',
        userName: 'jack',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2019-05-18',
        address: '北京市朝阳区望京SOHO',
        time: '09:00'
      },
      {
        id: '1',
        userName: 'Tom',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2019-05-18',
        address: '北京市朝阳区望京SOHO',
        time: '09:00'
      },
      {
        id: '2',
        userName: 'Lily',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2019-05-18',
        address: '北京市朝阳区望京SOHO',
        time: '09:00'
      }
    ]
    data.map((item, index) => {
      item.key = index
    })
    this.setState({
      dataSource: data
    })
    this.request()
  }

  request = () => {
    let _this = this
    axios.ajax({
      url: '/table/list',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res) => {
      if(res.code === 0) {
        res.result.list.map((item, index) => {
          item.key = index
        })
        this.setState({
          dataSource2: res.result.list,
          selectedRowKeys: [],
          selectedRows: null,
          pagination: Utils.pagination(res,(current) => {
            _this.params.page = current
            this.request()
          })
        })
      }
    })
  }

  onRowClick = (record, index) => {
    let selectKey = [index]
    Modal.info({
      title: '信息',
      content: `用户名：${record.userName}，用户爱好：${record.interest}`
    })
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }

  handleDelte = () => {
    let rows = this.state.selectedRows
    let ids = []
    rows.map((item) => {
      ids.push(item.id)
    })
    Modal.confirm({
      title: '删除提示',
      content: `您确定要删除这些数据吗？${ids.join(',')}`,
      onOk: () => {
        message.success('删除成功')
        this.request()
      }
    })
  }
   
  render() {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '好嗨哟',
            '4': '大傻逼',
            '5': '常伴吾身',
            '6': '德玛西亚',
            '7': '大吉大利'
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(interest) {
          let config = {
            '1': '游泳',
            '2': '吃饭',
            '3': '睡觉',
            '4': '撩妹',
            '5': '打游戏',
            '6': '抽烟',
            '7': '喝酒',
            '8': '写代码',
            '9': '打坐',
            '10': '吃火锅'
          }
          return config[interest]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      }
    ]
    const { selectedRowKeys } = this.state
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        // let ids = []
        // selectedRows.map((item) => {
        //   ids.push(item.id)
        // })
        this.setState({
          selectedRowKeys,
          // selectedIds: ids,
          selectedRows
        })
      }
    }

    return (
      <div>
        <Card title="基础表格" className="table-wrap">
          <Table 
              columns={ columns }
              dataSource={ this.state.dataSource }
              bordered
              pagination={ true }
          />
        </Card>
        <Card title="动态数据渲染表格-Mock" className="table-wrap">
          <Table 
              bordered
              columns={ columns }
              dataSource={ this.state.dataSource2 }
              pagination={ true }
          />
        </Card>
        <Card title="Mock-单选功能" className="table-wrap">
          <Table 
              bordered
              rowSelection={ rowSelection }
              onRow={(record, index) => {
                return {
                  onClick: () => { this.onRowClick(record, index) }   //点击行
                }
              }}
              columns={ columns }
              dataSource={ this.state.dataSource2 }
              pagination={ true }
          />
        </Card>
        <Card title="Mock-多选功能" className="table-wrap">
          <div style={{ marginBottom: 20 }}>
            <Button onClick={ this.handleDelte } type="primary">删除</Button>
          </div>
          <Table 
              bordered
              rowSelection={ rowCheckSelection }
              columns={ columns }
              dataSource={ this.state.dataSource2 }
              pagination={ false }
          />
        </Card>
        <Card title="Mock-表格分页" className="table-wrap">
          <div style={{ marginBottom: 20 }}>
            <Button onClick={ this.handleDelte } type="primary">删除</Button>
          </div>
          <Table 
              bordered
              columns={ columns }
              dataSource={ this.state.dataSource2 }
              pagination={ this.state.pagination }
          />
        </Card>
      </div>
    )
  }

}