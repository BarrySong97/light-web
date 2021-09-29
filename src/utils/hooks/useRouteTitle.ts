import { useState, useEffect } from 'react';
import { useLocation } from 'umi';

const routeCN2ENMap = new Map<string, string>([
  ['/user-center', '个人中心'],
  ['/exercise', '动作库'],
  ['/training', '训练'],
]);
export default function useRouteTitle() {
  let location = useLocation();
  return routeCN2ENMap.get(location.pathname);
}
