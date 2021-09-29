import { EditOutlined } from '@ant-design/icons';
import { Table, Tag } from 'antd';
import React, { FC } from 'react';
import styles from './index.less';
export interface SimpleEntryListProps {}
const columns = [
  {
    title: '创建时间',
    dataIndex: 'createDate',
    align: 'left',
  },
  {
    title: '金额',
    dataIndex: 'number',
    align: 'center',
  },
  {
    title: '流向',
    dataIndex: 'transfer',
    align: 'center',
    render: (text: any, recoder: any) => {
      return (
        <>
          <Tag color="#2db7f5" style={{ cursor: 'pointer' }}>
            {recoder.transfer[0]}
          </Tag>
          {'>>> '}
          <Tag color="#87d068" style={{ cursor: 'pointer' }}>
            {recoder.transfer[1]}
          </Tag>
        </>
      );
    },
  },
  {
    title: 'tag',
    dataIndex: 'tag',
    align: 'center',
    render: (text: any, recoder: any) => <a>#{text}</a>,
  },
  {
    title: '操作',
    dataIndex: 'action',
    align: 'center',
    render: () => (
      <>
        <EditOutlined style={{ cursor: 'pointer' }} />
      </>
    ),
  },
];

const data = [
  {
    key: '1',
    createDate: '2010-10-17',
    number: 80,
    transfer: ['支付宝', '吃饭'],
    tag: '小龙虾',
  },
  {
    key: '1',
    number: 80,
    createDate: '2010-10-17',
    transfer: ['支付宝', '吃饭'],
    tag: '小龙虾',
  },
  {
    key: '1',
    number: 80,
    createDate: '2010-10-17',
    transfer: ['支付宝', '吃饭'],
    tag: '小龙虾',
  },
  {
    key: '1',
    number: 80,
    createDate: '2010-10-17',
    transfer: ['支付宝', '吃饭'],
    tag: '小龙虾',
  },
  {
    key: '1',
    number: 80,
    createDate: '2010-10-17',
    transfer: ['支付宝', '吃饭'],
    tag: '小龙虾',
  },
  {
    key: '1',
    number: 80,
    createDate: '2010-10-17',
    transfer: ['支付宝', '吃饭'],
    tag: '小龙虾',
  },
];

const EntryList: FC<SimpleEntryListProps> = (props) => {
  return (
    <div className={styles.simpleEntryList}>
      <Table
        pagination={false}
        title={() => <h3>报表统计</h3>}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default EntryList;
