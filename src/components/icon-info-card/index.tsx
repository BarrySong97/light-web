import React, { useEffect, useState, FC } from 'react';
import classnames from 'classnames';
import styles from './index.less';
export interface IconInfoCardProps {
  claassName?: string;
  icon?: React.ReactNode;
  iconBackgroundColor?: string;
  label: string;
  data: string;
}

const IconInfoCard: FC<IconInfoCardProps> = (props) => {
  const { claassName, icon, label, data, iconBackgroundColor = '#fff' } = props;
  const [state, setState] = useState();

  return (
    <div className={classnames(claassName, styles.iconInfoCard)}>
      <div className={styles.iconLabel}>
        <div className={styles.data}>{data}</div>
        <div className={styles.label}>{label}</div>
      </div>
      <div
        className={styles.icon}
        style={{ backgroundImage: iconBackgroundColor }}
      >
        {icon}
      </div>
    </div>
  );
};

export default IconInfoCard;
