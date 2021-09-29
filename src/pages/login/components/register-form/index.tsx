import React, { FC } from 'react';
import styles from './index.less';
import { Button, Checkbox, Divider, Form, Input, Typography } from 'antd';
const { Title, Paragraph } = Typography;
import { WechatOutlined } from '@ant-design/icons';

export interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = (props) => {
  return (
    <div className={styles.registerForm}>
      <div style={{ width: '60%' }}>
        <div>
          <Title>注册</Title>
          <Paragraph>更好，更高效的记账软件</Paragraph>
        </div>

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
          <Form.Item
            label="确认密码"
            name="rePassword"
            rules={[{ required: true, message: '请输入密码！' }]}
          >
            <Input.Password
              placeholder="********"
              size="large"
              className={styles.inputItem}
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              className={styles.loginButton}
              type="primary"
              size="large"
              shape="round"
              htmlType="submit"
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default RegisterForm;
