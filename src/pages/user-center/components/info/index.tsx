import React, { FC, useEffect, useState } from 'react';
import styles from './index.less';
import classnames from 'classnames';
import IconInfoCard from '@/components/icon-info-card';
import {
  DollarCircleOutlined,
  FrownOutlined,
  MoneyCollectOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import { Col, Row } from 'antd';
import AddEntryFormProps from '../add-entry-form';
export interface InfoProps {
  className?: string;
}

const Info: FC<InfoProps> = (props) => {
  const { className } = props;
  const [state, setState] = useState();

  return (
    <div className={classnames(className, styles.info)}>
      <Row gutter={[24, 18]}>
        <Col span={12}>
          <IconInfoCard
            label="存款"
            data="100"
            iconBackgroundColor={
              'linear-gradient(to top, #9be15d 0%, #00e3ae 100%)'
            }
            icon={<MoneyCollectOutlined />}
          />
        </Col>
        <Col span={12}>
          <IconInfoCard
            label="消费/今年"
            data="100k"
            iconBackgroundColor={
              'linear-gradient(to top, #e6b980 0%, #eacda3 100%)'
            }
            icon={<DollarCircleOutlined />}
          />
        </Col>
        <Col span={12}>
          <IconInfoCard
            label="负债"
            data="10k"
            iconBackgroundColor={
              'linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)'
            }
            icon={<FrownOutlined />}
          />
        </Col>
        <Col span={12}>
          <IconInfoCard
            label="记账天数"
            data="100"
            iconBackgroundColor={
              'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)'
            }
            icon={<SmileOutlined />}
          />
        </Col>
        <Col span={24}>
          <AddEntryFormProps />
        </Col>
      </Row>
    </div>
  );
};

export default Info;
