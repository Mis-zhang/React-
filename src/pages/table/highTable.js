import React from 'react'
import { Card , Table , Modal, Button, message, Badge} from 'antd';
import axios from './../../axios/index'
import './table.less'
import Utils from './../../utils/utils';
export default class HighTable extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
    }
  }
  
  params = {
    page: 1
  }

  componentWillMount() {
    this.request()
  }

  request = () => {
    let _this = this
    axios.ajax({
      url: '/table/high/list',
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
          dataSource: res.result.list,
        })
      }
    })
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortOrder: sorter.order
    })
  }

  handleDelete = (item) => {
    let id = item.id
    Modal.confirm({
      title: '确认',
      content: '您确认要删除此条数据吗？',
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
        key: 'id',
        width: 80,
        dataIndex: 'id'
      },
      {
        title: '用户名',
        key: 'userName',
        width: 80,
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        width: 80,
        dataIndex: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        key: 'state',
        width: 80,
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
        key: 'interest',
        width: 80,
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
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        width: 120,
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        width: 80,
        dataIndex: 'time'
      }
    ]
    const columns2 = [
      {
        title: 'id',
        key: 'id',
        fixed: 'left',
        width: 80,
        dataIndex: 'id'
      },
      {
        title: '用户名',
        key: 'userName',
        fixed: 'left',
        width: 80,
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        width: 80,
        dataIndex: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        key: 'state',
        width: 80,
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
        key: 'interest',
        width: 80,
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
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        fixed: 'right',
        width: 120,
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        fixed: 'right',
        width: 120,
        dataIndex: 'time'
      }
    ]
    const columns3 = [
      {
        title: 'id',
        key: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        key: 'userName',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        key: 'age',
        dataIndex: 'age',
        sorter: (a, b) => {
          return a.age - b.age
        },
        sortOrder: this.state.sortOrder
      },
      {
        title: '状态',
        key: 'state',
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
        key: 'interest',
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
        key: 'birthday',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        dataIndex: 'time'
      }
    ]
    const columns4 = [
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
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': "今晚吃鸡",
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
            '1': <Badge status="success" text="游泳" />,
            '2': <Badge status="error" text="吃饭" />,
            '3': <Badge status="default" text="睡觉" />,
            '4': <Badge status="processing" text="撩妹" />,
            '5': <Badge status="warning" text="打游戏" />,
            '6': <Badge status="error" text="抽烟" />,
            '7': <Badge status="success" text="喝酒" />,
            '8': <Badge status="default" text="写代码" />,
            '9': <Badge status="warning" text="打坐" />,
            '10': <Badge status="success" text="吃火锅" />
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
        title: '操作',
        render: (text, item) => {
          return <Button onClick={ (item) => { this.handleDelete(item) } } type="ghost" size="small">删除</Button>
        }
      }
    ]
    return (
      <div>
        <Card title="头部固定表格" className="table-wrap">
          <Table 
              columns={ columns }
              dataSource={ this.state.dataSource }
              bordered
              pagination={ false }
              scroll={{y: 240}}
          />
        </Card>
        <Card title="左侧固定" className="table-wrap">
          <Table 
              bordered
              columns={ columns2 }
              dataSource={ this.state.dataSource }
              pagination={ false }
              scroll={{x: 2190}}
          />
        </Card>
        <Card title="排序" className="table-wrap">
          <Table 
              bordered
              columns={ columns3 }
              dataSource={ this.state.dataSource }
              pagination={ false }
              onChange={ this.handleChange }
          />
        </Card>
        <Card title="操作按钮" className="table-wrap">
          <Table 
              bordered
              columns={ columns4 }
              dataSource={ this.state.dataSource }
              pagination={ false }
          />
        </Card>
      </div>
    )
  }

}