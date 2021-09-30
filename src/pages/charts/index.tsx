import React, { FC, useEffect, useState } from 'react';
import RcResizeObserver from 'rc-resize-observer';
import { StatisticCard } from '@ant-design/pro-card';
import { Col, Divider, Row } from 'antd';
import LeftLineTitle from '@/components/left-line-title';
import { Area, WordCloud } from '@ant-design/charts';
import CloudCharts from '@/components/charts';
const Charts: FC = () => {
  const [responsive, setResponsive] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'Date',
    yField: 'scales',
    height: 150,
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    areaStyle: function areaStyle() {
      return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
    },
  };

  return (
    <>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <Row gutter={[16, 32]}>
          <Col span={24}>
            <StatisticCard
              title="2021每月训练时间走势"
              chart={<Area {...config} />}
            />
          </Col>
          <Col span={24}>
            <StatisticCard title="动作数据" chart={<CloudCharts />} />
          </Col>
          <Col span={24}>
            <StatisticCard.Group
              hoverable
              title={<LeftLineTitle title="三大项数据" />}
              direction={responsive ? 'column' : 'row'}
            >
              <StatisticCard
                title="卧推"
                chart={
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                    alt="直方图"
                    width="100%"
                  />
                }
              />
              <Divider type={responsive ? 'horizontal' : 'vertical'} />
              <StatisticCard
                title="深蹲"
                chart={
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                    alt="直方图"
                    width="100%"
                  />
                }
              />
              <Divider type={responsive ? 'horizontal' : 'vertical'} />
              <StatisticCard
                title="硬拉"
                chart={
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                    alt="直方图"
                    width="100%"
                  />
                }
              />
            </StatisticCard.Group>
          </Col>
        </Row>
      </RcResizeObserver>
    </>
  );
};

export default Charts;
