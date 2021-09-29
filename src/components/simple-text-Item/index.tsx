import { Typography } from 'antd';
import React, { FC } from 'react';
import styles from './index.less';
const { Text, Title } = Typography;
interface ItemProps {
  main: string | number | React.ReactNode;
  second?: string | number | React.ReactNode;
  orientation?: 'vertical' | 'horizontal';
}

const SimpleTextItem: FC<ItemProps> = ({
  main,
  second,
  orientation = 'vertical',
}) => (
  <div
    className={styles.item}
    style={{ flexDirection: orientation === 'vertical' ? 'column' : 'row' }}
  >
    <div style={{ margin: 0 }}>
      <span className={styles.main}>{main}</span>
    </div>
    <div style={{ margin: 0 }}>
      <span className={styles.second}>{second}</span>
    </div>
  </div>
);

export default SimpleTextItem;
