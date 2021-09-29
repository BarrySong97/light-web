import React, { FC } from 'react';
import styles from './index.less';
import { Button, Checkbox, Divider, Form, Input, Typography } from 'antd';
const { Title, Paragraph } = Typography;
import { WechatOutlined } from '@ant-design/icons';
export interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = (props) => {
  return (
    <div className={styles.loginForm}>
      <div style={{ width: '60%' }}>
        <div>
          <Title>登录</Title>
          <Paragraph>更好，更高效的记账软件</Paragraph>
        </div>
        <div className={styles.wechat}>
          <Button
            className={styles.wecharBtn}
            shape="round"
            icon={<WechatOutlined style={{ color: 'green' }} />}
            size="large"
          >
            微信登录
          </Button>
        </div>
        <Divider orientation="center">使用邮箱登录</Divider>
        <Form
          layout="vertical"
          name="basic"
          className={styles.form}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input
              size="large"
              placeholder="xxxx@website.com"
              className={styles.inputItem}
            />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码！' }]}
          >
            <Input.Password
              placeholder="********"
              size="large"
              className={styles.inputItem}
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <a href="" className={styles.loginFormForgot}>
              忘记密码
            </a>
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              className={styles.loginButton}
              type="primary"
              size="large"
              shape="round"
              htmlType="submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
