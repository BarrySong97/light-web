import { ForwardOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import classnames from 'classnames';
import React, { FC } from 'react';
import styles from './index.less';
export interface AddEntryFormProps {
  className?: string;
}

const AddEntryForm: FC<AddEntryFormProps> = (props) => {
  const { className } = props;
  return (
    <div className={classnames(styles.addEntry, className)}>
      <Form
        layout="inline"
        name="basic"
        style={{ width: '100%' }}
        className={styles.form}
        initialValues={{ remember: true }}
      >
        <Row gutter={[10, 16]}>
          <Col span={24}>
            <Form.Item name="comment" label="备注" style={{ width: '100%' }}>
              <Input size="middle" placeholder="#吃晚饭 去吃了小龙虾" />
            </Form.Item>
          </Col>
          <Col>
            <Row gutter={[7, 16]}>
              <Col>
                <Form.Item label="金额" name="amount">
                  <InputNumber min={1} max={10} defaultValue={3} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name="date">
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name="category">
                  <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
                    <Select.Option value="lucy">Lucy</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name="account">
                  <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
                    <Select.Option value="lucy">Lucy</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name="comment">
                  <Button type="primary" htmlType="submit">
                    添加
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddEntryForm;
