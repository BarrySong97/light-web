import React, { FC } from 'react';
import styles from './index.less';
import classnames from 'classnames';
interface PageWrapperProps {
  className?: string;
}

const PageWrapper: FC<PageWrapperProps> = (props) => {
  const { className } = props;
  return (
    <div className={classnames(styles.pageWrapper, className)}>
      {props.children}
    </div>
  );
};

export default PageWrapper;
