import React from 'react'

import './ui.less'
import { Card, Tabs, message , Icon} from 'antd';
const TabPane = Tabs.TabPane

export default class Tab extends React.Component{
  newTabIndex = 0
  constructor(props) {
    super(props)
    this.state = {
      panes: Array,
      activeKey: '1'
    }
  }

  componentWillMount() {
    const panes = [
      {
        title: 'Tab 1',
        content: 'Tab 1',
        key: '1'
      },
      {
        title: 'Tab 2',
        content: 'Tab 2',
        key: '2'
      },
      {
        title: 'Tab 3',
        content: 'Tab 3',
        key: '3'
      }
    ]
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }

  handleCallback = (key) => {
    message.info('嗨，您选择了页签：' + key)
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab ${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: `Content of new Tab ${activeKey}`, key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  }

  
  render() {
    return (
      <div>
        <Card title="tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={ this.handleCallback }>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
        <Card title="tab带图标的页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={ this.handleCallback }>
            <TabPane tab={ <span><Icon type="plus" />Tab 1</span> } key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab={ <span><Icon type="edit" />Tab 2</span> } key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab={ <span><Icon type="delete" />Tab 3</span> } key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
        <Card title="tab可关闭的页签" className="card-wrap">
          <Tabs 
          type="editable-card"
          onChange={ this.onChange }
          activeKey={ this.state.activeKey }
          onEdit={ this.onEdit }
          >
            {
              this.state.panes.map((panel) => {
                return <TabPane tab={ panel.title } key={ panel.key }>{ panel.content }</TabPane>
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }

}