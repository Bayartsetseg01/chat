import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Menu, Button } from 'antd';

import {
  AppstoreOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Status', '9'),
    getItem('Status', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const UserMenu= () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        width: 100,
      }}
    >
      
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default UserMenu;

// import React from 'react';
// import 'antd/dist/antd.css';
// // import './index.css';
// import { Menu, Button } from 'antd';

// import {
//   AppstoreOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   PieChartOutlined,
//   DesktopOutlined,
//   ContainerOutlined,
//   MailOutlined,
// } from '@ant-design/icons';

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }

// const items = [
//   getItem('Navigation One', 'sub1', <MailOutlined />, [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Option 7', '7'),
//     getItem('Option 8', '8'),
//   ]),
//   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
//   ]),
// ];

// const UserMenu= () => {
//   const [collapsed, setCollapsed] = React.useState(false);

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <div
//       style={{
//         width: 256,
//       }}
//     >
      
//       <Button
//         type="primary"
//         onClick={toggleCollapsed}
//         style={{
//           marginBottom: 16,
//         }}
//       >
//         {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//       </Button>
//       <Menu
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['sub1']}
//         mode="inline"
//         theme="dark"
//         inlineCollapsed={collapsed}
//         items={items}
//       />
//     </div>
//   );
// };

// export default UserMenu;