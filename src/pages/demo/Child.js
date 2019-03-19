import React from 'react'

export default class Child extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      count: 0
    }
  }
  componentWillMount() {
    console.log('Will Mount')
  }
  componentDidMount() {
    console.log('Did Mount')
  }
  componentWillReceiveProps(newProps) {
    console.log('Will Receive Props---->' + newProps.name);
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('Will Update')
  }
  componentDidUpdate() {
    console.log('Did Update')
  }
  render() {
    return <div>
      <p>这是子组件，测试子组件的生命周期</p>
      <p>{ this.props.name }</p>
    </div>
  }
}