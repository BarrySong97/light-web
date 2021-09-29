import { GithubOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';
import React, { FC } from 'react';

interface FooterProps {}

const LayoutFooter: FC<FooterProps> = (props) => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      More Than Rich ©2018 Created by &nbsp;
      <GithubOutlined /> &nbsp;
      <a href="https://github.com/BarrySong97" target="_blank">
        Barry Song
      </a>{' '}
      &nbsp;
      <WeiboCircleOutlined style={{ color: 'red' }} /> &nbsp;
      <a href="https://weibo.com/u/2670904663" target="_blank">
        @BarrySong4real
      </a>
    </Footer>
  );
};

export default LayoutFooter;
