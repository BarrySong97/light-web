import { WordCloud } from '@ant-design/charts';
import React, { FC, useEffect, useState } from 'react';

export interface ChartsProps {}

const Charts: FC<ChartsProps> = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/jPKbal7r9r/mock.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    wordField: 'x',
    weightField: 'value',
    color: '#122c6a',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [24, 80],
    },
    imageMask: 'https://files.catbox.moe/ey890a.jpg',
    interactions: [{ type: 'element-active' }],
    state: { active: { style: { lineWidth: 3 } } },
  };
  return <WordCloud {...config} />;
};

export default Charts;
