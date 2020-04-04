import React from 'react'
import { Layout } from 'antd'
import Header from './components/Header'
import Navside from './components/Navside'
import { Route, Switch } from 'react-router-dom'
import routes from '../../router/routes'

class BaseLayout extends React.Component<object, object> {
    render() {
        return(
            <Layout className="main">
                <Layout.Header className="main-header"><Header/></Layout.Header>
                <Layout className="main-content">
                    <Layout.Sider width={200} className="site-layout-background">
                        <Navside/>
                    </Layout.Sider>
                    <Layout.Content>
                        <Switch>
                            {routes.map(item => {
                                const renderRouter = (item:any) => {
                                    return <Route key={item.path} path={item.path} component={item.component} />
                                }
                                return item.component ? renderRouter(item) : item.children && item.children.map(e => renderRouter(e))
                            })}
                        </Switch>
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}
export default BaseLayout