import Login from '@/pages/login';
import { Layout, Menu } from 'antd';
import React, { FC } from 'react';
import styles from './index.less';
import { useToggle } from 'ahooks';

import LayoutFooter from '../components/footer';
import LayoutHeader from '../components/header';
import LayoutSider from '../components/sider';
const { Content, Sider } = Layout;
interface Props {}
const MtrLayout: FC<Props> = (props) => {
  if (window.location.pathname === '/login') {
    return <Login></Login>;
  }
  const [collapsed, { toggle: toggleCollapsed }] = useToggle();

  return (
    <Layout>
      <LayoutSider collapsed={collapsed} />
      <Layout>
        <LayoutHeader toggle={toggleCollapsed} collapsed={collapsed} />
        <Content className={styles.content}>{props.children}</Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

export default MtrLayout;
