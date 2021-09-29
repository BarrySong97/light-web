import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { List, Statistic, Table } from 'antd';
import React, { FC } from 'react';
import styles from './index.less';
import SimpleTextItem from '../simple-text-Item';
export interface UpDownListProps {}
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    align: 'left',
    render: () => (
      <SimpleTextItem main={'鹏华匠心精选混合C'} second={'001210'} />
    ),
  },
  {
    title: '最新估值',
    dataIndex: 'estimate',
    align: 'center',
    render: () => (
      <SimpleTextItem
        main={'1.0939'}
        second={
          <>
            <ArrowUpOutlined style={{ color: 'red', fontSize: 12 }} /> 19.2%
          </>
        }
      />
    ),
  },
  {
    title: '基金净值',
    dataIndex: 'pure',
    align: 'center',
    render: () => <SimpleTextItem main={'3.6143'} second={'2010 - 10 - 17'} />,
  },
  {
    title: '持有金额',
    dataIndex: 'number',
    align: 'center',
    render: () => <SimpleTextItem main={'10000'} />,
  },
  {
    title: '持有收益',
    dataIndex: 'earn',
    align: 'center',
    render: () => (
      <SimpleTextItem main={'鹏华匠心精选混合C'} second={'001210'} />
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

const UpDownList: FC<UpDownListProps> = (props) => {
  return (
    <div className={styles.upDownList}>
      <Table
        pagination={false}
        title={() => <h3>基金</h3>}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default UpDownList;
