import React, { FC } from 'react';
import styles from './index.less';
import { Layout, Menu, Typography } from 'antd';
import {
  BarChartOutlined,
  DashboardOutlined,
  InboxOutlined,
  RiseOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';
const { Text } = Typography;
const { Sider } = Layout;
interface SiderProps {
  collapsed: boolean;
}

const LayoutSider: FC<SiderProps> = (props) => {
  const { collapsed } = props;
  return (
    <Sider className={styles.sideer} theme="light" collapsed={collapsed}>
      <div className={styles.logo}>Light</div>
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/user-center">个人中心</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<BarChartOutlined />}>
          <Link to="/charts">图表</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<RiseOutlined />}>
          <Link to="/training">训练</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<InboxOutlined />}>
          <Link to="/exercise">动作库</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default LayoutSider;
