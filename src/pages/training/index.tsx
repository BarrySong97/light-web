import React, { FC } from 'react';
import ProList from '@ant-design/pro-list';
import Charts from '@/components/charts';
import { Column, ColumnConfig } from '@ant-design/charts';
import { Col, Dropdown, Menu, Row, Tag } from 'antd';
import { StatisticCard } from '@ant-design/pro-card';
import { EllipsisOutlined } from '@ant-design/icons';
export interface TrainingProps {}
var vData = [
  {
    date: '2010-10-02',
    trainingNumber: 200,
  },
  {
    date: '2010-10-04',
    trainingNumber: 323,
  },
  {
    date: '2010-10-14',
    trainingNumber: 355,
  },
  {
    date: '2010-10-05',
    trainingNumber: 643,
  },
];
var config: ColumnConfig = {
  data: vData,
  xField: 'date',
  yField: 'trainingNumber',
  intervalPadding: 5,
  minColumnWidth: 20,
  maxColumnWidth: 20,
  columnStyle: {
    radius: [20, 20, 0, 0],
  },
  height: 200,
  label: {
    position: 'middle',
    style: {
      fill: '#FFFFFF',
      opacity: 0.6,
    },
  },
  yAxis: { grid: null },
  xAxis: {
    line: null,
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  meta: {
    date: { alias: '日期' },
    trainingNumber: { alias: '训练量' },
  },
};

const Training: FC<TrainingProps> = () => {
  const menu = (
    <Menu>
      <Menu.Item key="delete">删除</Menu.Item>
      <Menu.Item key="detail">详情</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <StatisticCard
            title="10-12月计划"
            hoverable
            tip="深蹲加强"
            style={{ maxWidth: 480 }}
            extra={<EllipsisOutlined />}
            chart={<Column {...config} />}
          />
        </Col>
        <Col span={6}>
          <StatisticCard
            title="10-12月计划"
            tip="深蹲加强"
            hoverable
            style={{ maxWidth: 480 }}
            extra={<EllipsisOutlined />}
            chart={<Column {...config} />}
          />
        </Col>
        <Col span={6}>
          <StatisticCard
            title="10-12月计划"
            tip="深蹲加强"
            hoverable
            style={{ maxWidth: 480 }}
            extra={<EllipsisOutlined />}
            chart={<Column {...config} />}
          />
        </Col>
        <Col span={6}>
          <StatisticCard
            title="10-12月计划"
            tip="深蹲加强"
            hoverable
            style={{ maxWidth: 480 }}
            extra={
              <Dropdown overlay={menu}>
                <EllipsisOutlined />
              </Dropdown>
            }
            chart={<Column {...config} />}
          />
        </Col>
      </Row>
    </>
  );
};

export default Training;
