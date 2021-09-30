import React, { FC } from 'react';
import './index.less';
export interface LeftLineTitleProps {
  title: string;
}
const LeftLineTitle: FC<LeftLineTitleProps> = ({ title }) => {
  return <div className="leftLineTitle">{title}</div>;
};

export default LeftLineTitle;
