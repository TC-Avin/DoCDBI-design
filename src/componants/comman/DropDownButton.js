import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space } from 'antd';



const DropDownButton = () => {

    const handleMenuClick = (e) => {
     //   message.info('Click on menu item.');
        console.log('click', e);
      };

    const menu = (
        <Menu
          onClick={handleMenuClick}
          items={[
            {
              label: 'Active',
              key: '1',
            //   icon: <UserOutlined />,
            },
            {
              label: 'Deactive',
              key: '2',
            //   icon: <UserOutlined />,
            },
            // {
            //   label: '3rd menu item',
            //   key: '3',
            //   icon: <UserOutlined />,
            // },
          ]}
        />
      );
  return (
    <Space wrap>
        <Dropdown overlay={menu} trigger="click">
            <Button className="Dropdown-btn">
                <Space>
                    Button
                    <DownOutlined className='d-flex' />
                </Space>
             </Button>
        </Dropdown>
    </Space>
      )
}

export default DropDownButton