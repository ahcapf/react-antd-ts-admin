import React from 'react'
import routes from '../../../router/routes'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';

function renderLinkMenu(menu: any) {
    return (
        <Menu.Item key={menu.path}>
            <Link to={ menu.path }>
                {menu.title}
            </Link>
        </Menu.Item>
    )
}

function renderSubmenu(submenu: any) {
    return (
        <Menu.SubMenu
            key={submenu.path}
            title={
            <span>
                { submenu.title }
            </span>
            }
        >
        { submenu.children && submenu.children.map((item: any) => renderLinkMenu(item)) }
      </Menu.SubMenu>
    )
}

export default function Navside() {
    return (
        <Menu
          mode="inline"
          theme="dark"
        >
        { routes.map(item => {
            if (item.children) {
                return renderSubmenu(item)
            } else {
                return renderLinkMenu(item)
            }
        })}
        </Menu>
    )
}