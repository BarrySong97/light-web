import mockjs from 'mockjs';

export default {
  // use mockjs
  'GET /api/dailyExpenses': mockjs.mock({
    msg: 'success',
    'content|1-30': [
      { date: '@datetime(`MM-dd`)', expenses: '@natural(0, 100)' },
    ],
  }),
  'GET /api/entries': mockjs.mock({
    msg: 'success',
    'content|1-30': [
      { date: '@datetime(`MM-dd`)', expenses: '@natural(0, 100)' },
    ],
  }),
  'GET /api/refreshData': getData(),
};

function getData() {
  let random = mockjs.Random.natural(5, 10);
  const data = [];
  while (random > 0) {
    data.push({
      status: mockjs.Random.natural(0, 2),
      operator: mockjs.Random.last(),
      project: {
        id: mockjs.Random.natural(100000, 500000),
        name: mockjs.Random.title(),
      },
    });
    random--;
  }
  return data;
}
