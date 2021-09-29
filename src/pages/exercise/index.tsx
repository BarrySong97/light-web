import React, { FC, useState } from 'react';
export interface ExerciseProps {}
import { Button, Tooltip } from 'antd';
import {
  DownOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type exerciseListItem = {
  key: string;
  name: string;
  section: string;
  trainingTimes: number;
  allTrainingNumber: number;
  lastTrainingDate: number;
};
const tableListDataSource: exerciseListItem[] = [];

const creators = ['卧推', '深蹲', '硬拉', '上斜推', '侧平举'];
const sections = ['背', '腿', '肩', '手臂', '胸'];
for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: `${i}`,
    name: creators[i],
    section: sections[i],
    trainingTimes: 20,
    allTrainingNumber: 500,
    lastTrainingDate: Date.now() - Math.floor(Math.random() * 100000),
  });
}

const Exercise: FC<ExerciseProps> = () => {
  const [exerciseList, setExerciseList] =
    useState<exerciseListItem[]>(tableListDataSource);

  const onDelete = (id: string) => {
    setExerciseList(exerciseList.filter((v) => v.key !== id));
  };
  const columns: ProColumns<exerciseListItem>[] = [
    {
      title: '动作名称',
      dataIndex: 'name',
      align: 'center',
      render: (_) => <a>{_}</a>,
    },
    {
      title: '训练部位',
      dataIndex: 'section',
      valueType: 'select',
      align: 'center',
      valueEnum: {
        chest: { text: '胸', status: '1' },
        back: {
          text: '背',
          status: '2',
        },
        shoulder: {
          text: '肩',
          status: '3',
        },
        肩: {
          text: '腿',
          status: '4',
        },
        arm: {
          text: '手臂',
          status: '5',
        },
      },
    },
    {
      title: '训练次数',
      align: 'center',
      search: false,
      dataIndex: 'trainingTimes',
    },
    {
      title: '总训练量',
      align: 'center',
      search: false,
      dataIndex: 'allTrainingNumber',
      render: (text) => {
        return text + ' kg';
      },
    },

    {
      title: '上次训练时间',
      align: 'center',
      search: false,
      dataIndex: 'lastTrainingDate',
      valueType: 'date',
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (text, record) => [
        <a key="link">编辑</a>,
        <a key="link2" onClick={() => onDelete(record.key)}>
          删除
        </a>,
        <a key="link3">动作详情</a>,
      ],
    },
  ];
  return (
    <div>
      <ProTable<exerciseListItem>
        columns={columns}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: exerciseList,
            success: true,
          });
        }}
        rowKey="key"
        pagination={{
          showQuickJumper: true,
        }}
        search={{ layout: 'vertical', defaultCollapsed: false }}
        dateFormatter="string"
        headerTitle=""
        toolBarRender={() => [
          <Button type="primary" key="primary">
            添加动作
          </Button>,
          <Button key="out">
            导出数据
            <DownOutlined />
          </Button>,
        ]}
      />
    </div>
  );
};

export default Exercise;
