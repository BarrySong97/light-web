import React, { FC } from 'react';
import ProList from '@ant-design/pro-list';
import Charts from '@/components/charts';
import { Line } from '@ant-design/charts';
export interface TrainingProps {}
const vData = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

const config = {
  data: vData,
  height: 400,
  xField: 'year',
  yField: 'value',
  point: {
    size: 5,
    shape: 'diamond',
  },
};
const data = [
  '语雀的天空',
  'Ant Design',
  '蚂蚁金服体验科技',
  'TechUI',
  'TechUI 2.0',
  'Bigfish',
  'Umi',
  'Ant Design Pro',
].map((item) => ({
  title: '9月10月计划',
  // subTitle: <Tag color="#5BD8A6">9月10月计划</Tag>,
  actions: [<a>详情</a>],
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
      }}
    >
      <div className="container">
        <Line {...config} />;
      </div>
    </div>
  ),
}));
const Training: FC<TrainingProps> = () => {
  return (
    <ProList<any>
      pagination={{
        defaultPageSize: 8,
        showSizeChanger: false,
      }}
      grid={{ gutter: 16, column: 3 }}
      metas={{
        title: {},
        subTitle: {},
        type: {},
        avatar: {},
        content: {},
        actions: {},
      }}
      headerTitle="翻页"
      dataSource={data}
    />
  );
};

export default Training;
