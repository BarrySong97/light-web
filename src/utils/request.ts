import { extend, RequestOptionsInit } from 'umi-request';
const request = extend({
    //credentials: 'include', // 默认请求是否带上cookie
  });
export interface RequestDataType<T> {
  content: T;
  message?: string;
}

const Request = <T extends {}>(
  func: () => Promise<RequestDataType<T>>,
): Promise<T> => {
  // return func();
};


// export default request;
