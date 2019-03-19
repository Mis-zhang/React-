import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
// 登录
import Login from './pages/login'
import Admin from './admin'
// 首页
import Home from './pages/home'
// Ui组件
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loadings'
import NoMatch from './pages/nomatch'
import Notice from './pages/ui/notification'
import Message from './pages/ui/Message'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
// 表单
import FormLogin from './pages/form/login'
import Register from './pages/form/register'
// 表格
import BasicTable from './pages/table/basicTable'

export default class IRouter extends React.Component {

  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={ Login } />
          <Route path="/admin" render={() =>
            <Admin>
              <Switch>
                <Route exact={ true } path="/admin" component={ Home } />
                <Route path="/admin/ui/buttons" component={ Buttons } />
                <Route path="/admin/ui/modals" component={ Modals } />
                <Route path="/admin/ui/loading" component={ Loading } />
                <Route path="/admin/ui/notification" component={ Notice } />
                <Route path="/admin/ui/messages" component={ Message } />
                <Route path="/admin/ui/tabs" component={ Tabs } />
                <Route path="/admin/ui/gallery" component={ Gallery } />
                <Route path="/admin/ui/carousel" component={ Carousel } />
                <Route path="/admin/form/login" component={ FormLogin } />
                <Route path="/admin/form/register" component={ Register } />
                <Route path="/admin/table/basic" component={ BasicTable } />
                <Route component={ NoMatch } />
              </Switch>
            </Admin>
          } />
        </App>
      </HashRouter>
    )
  }

}