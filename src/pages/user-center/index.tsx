import React, { FC, useEffect, useState } from 'react';
import RcResizeObserver from 'rc-resize-observer';
import ProCard, { Statistic, StatisticCard } from '@ant-design/pro-card';
import { Area, Pie } from '@ant-design/charts';
interface UserCenterProps {}

const UserCenter: FC<UserCenterProps> = (props) => {
  const [responsive, setResponsive] = useState(false);
  var data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
  };

  const [vdata, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const imgStyle = {
    display: 'block',
    width: 42,
    height: 42,
  };
  var vconfig = {
    data: vdata,
    xField: 'Date',
    yField: 'scales',
    height: 300,
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    areaStyle: function areaStyle() {
      return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
    },
  };
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard
        title="数据概览"
        extra="2019年9月28日 星期五"
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '训练天数',
                  value: 325,
                  suffix: '天',
                }}
              />
              <StatisticCard
                statistic={{
                  title: '本月训练',
                  value: 16,
                  suffix: '天',
                  description: (
                    <Statistic title="月同比" value="2天" trend="down" />
                  ),
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '总平均训练时间',
                  value: '65',
                  suffix: '分钟',
                }}
              />
              <StatisticCard
                statistic={{
                  title: '本月平均训练时间',
                  value: '65',
                  suffix: '分钟',
                  description: (
                    <Statistic title="月同比" value="10分钟" trend="up" />
                  ),
                }}
              />
            </ProCard>
          </ProCard>
          <StatisticCard
            title="今年训练时间走势"
            chart={<Area {...vconfig} />}
          />
        </ProCard>
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <StatisticCard.Group
              title="三大项"
              direction={responsive ? 'column' : 'row'}
            >
              <StatisticCard
                statistic={{
                  title: '卧推',
                  value: 2176,
                  icon: (
                    <img
                      style={imgStyle}
                      src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                      alt="icon"
                    />
                  ),
                }}
              />
              <StatisticCard
                statistic={{
                  title: '深蹲',
                  value: 475,
                  icon: (
                    <img
                      style={imgStyle}
                      src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                      alt="icon"
                    />
                  ),
                }}
              />
              <StatisticCard
                statistic={{
                  title: '支付成功订单数',
                  value: 87,
                  icon: (
                    <img
                      style={imgStyle}
                      src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                      alt="icon"
                    />
                  ),
                }}
              />
            </StatisticCard.Group>
          </ProCard>

          <StatisticCard title="本月训练部位占比" chart={<Pie {...config} />} />
        </ProCard>
      </ProCard>
    </RcResizeObserver>
  );
};

export default UserCenter;
