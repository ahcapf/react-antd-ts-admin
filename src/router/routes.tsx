
import Index from '../pages/homePage'
import SystemConfig from '../pages/config/System'
import UserConfig from '../pages/config/User'

interface MenuItem {
    path: string,
    title: string,
    icon?: string,
    component?: any,
    children?: MenuItem[]
}
const routes: MenuItem[] = [
    {
        path: '/homePage',
        title: '首页',
        component: Index
    },
    {
        path: '/config',
        title: '配置管理',
        children: [
            {
                path: '/config/system',
                title: '系统配置',
                component: SystemConfig
            },
            {
                path: '/config/user',
                title: '用户配置',
                component: UserConfig
            }
        ]
    }
]

export default routes