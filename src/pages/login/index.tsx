import React, { FC, useEffect, useState } from 'react';
import styles from './index.less';
import LoginForm from './components/login-form';
import RegisterForm from './components/register-form';
import { Transaction, Wallet } from '@/assets/login/index';
import { Carousel } from 'antd';

const Login: FC = () => {
  const [state, setState] = useState<'login' | 'register'>('login');
  return (
    <div className={styles.PageContainer}>
      <div className={styles.box}>
        <div className={styles.form}>
          {state === 'login' ? (
            <>
              <LoginForm />
              <div className={styles.register}>
                没有账号? &nbsp;
                <a onClick={() => setState('register')}>注册一个账号🎉</a>
              </div>
            </>
          ) : (
            <>
              <RegisterForm />
              <div className={styles.register}>
                已有账号? &nbsp;
                <a onClick={() => setState('login')}>点击登录🎉</a>
              </div>
            </>
          )}
        </div>

        <div className={styles.loginImgContainer}>
          <Carousel autoplay>
            <div>
              <Transaction className={styles.loginImg} />
            </div>
            <div>
              <Wallet className={styles.loginImg} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Login;
