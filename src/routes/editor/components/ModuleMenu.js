import { Menu } from 'antd';
import React from 'react';
import { Link  } from 'react-router-dom'
import {inject, observer} from 'mobx-react';

@inject("project")
@observer
export default class MoudleMenu extends React.Component {
  state = {
    selectedKey:this.props.project.moduleId+''
  }

  handleClick = (e) => {
    this.setState({'selectedKey':e.key});
    let module=e.item.props.module;
    this.props.project.selectInterfase(module.id)
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.selectedKey]}
        mode="horizontal"
      >
        {
          this.props.project.modules.map(item=>{
            return (
              <Menu.Item key={item.id} module={item}>
                  <Link to={{
                              pathname: '/editor/2',
                              search: `?moduleId=${item.id}`
                            }}>{item.name}</Link>
              </Menu.Item>
            )
          })
        }


      </Menu>
    );
  }
}
