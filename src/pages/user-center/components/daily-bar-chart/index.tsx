import React, { FC } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import styles from './index.less';
import classnames from 'classnames';
interface DailyBarChartProps {
  className?: string;
}

const DailyBarChart: FC<DailyBarChartProps> = (props) => {
  const { className } = props;
  const option = {
    backgroundColor: '#fff',

    xAxis: [
      {
        type: 'category',
        color: '#59588D',
        data: [
          '2021-10-01',
          '2021-10-02',
          '2021-10-03',
          '2021-10-04',
          '2021-10-05',
          '2021-10-06',
          '2021-10-07',
          '2021-10-08',
          '2021-10-09',
          '2021-10-15',
          '2021-10-11',
          '2021-10-12',
          '2021-10-13',
          '2021-10-14',
          '2021-10-15',
          '2021-10-14',
          '2021-10-42',
          '2021-10-33',
          '2021-10-44',
          '2021-10-45',
          '2021-10-41',
          '2021-10-52',
          '2021-10-53',
          '2021-10-64',
          '2021-10-65',
          '2021-10-61',
          '2021-10-22',
          '2021-10-33',
          '2021-10-14',
          '2021-10-25',
        ],
        axisLabel: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(107,107,107,0.37)',
          },
        },

        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        axisLabel: {
          color: '#999',
          textStyle: {
            fontSize: 12,
          },
        },

        axisLine: {
          lineStyle: {
            color: 'rgba(107,107,107,0.37)',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        label: {
          show: true,
          backgroundColor: '#fff',
          color: '#556677',
          borderColor: 'rgba(0,0,0,0)',
          shadowColor: 'rgba(0,0,0,0)',
          shadowOffsetY: 0,
        },
        lineStyle: {
          width: 0,
        },
      },
      backgroundColor: '#fff',
      textStyle: {
        color: '#5c6c7c',
      },
      padding: [10, 10],
      extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
    },
    series: [
      {
        type: 'bar',
        data: [
          40,
          80,
          20,
          21,
          40,
          40,
          12,
          43,
          12,
          32,
          40,
          80,
          20,
          21,
          40,
          40,
          12,
          43,
          12,
          32,
          40,
          80,
          20,
          21,
          40,
          40,
          12,
          43,
          12,
          32,
        ],
        barWidth: '10px',
        itemStyle: {
          normal: {
            color: function (params: any) {
              //展示正值的柱子，负数设为透明
              let colorArr = ['#66a6ff', '#89f7fe'];
              return new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: colorArr[0], // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: colorArr[1], // 100% 处的颜色
                  },
                ],
                false,
              );
            },
          },
        },
        label: {
          normal: {
            show: false,
          },
        },
      },
    ],
  };
  return (
    <div className={classnames(className)}>
      <ReactECharts option={option} />
    </div>
  );
};

export default DailyBarChart;
