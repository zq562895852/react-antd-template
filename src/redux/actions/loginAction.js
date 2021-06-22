import * as types from '../types/index';

// 添加
export const add = (payload) => ({ type: types.ADD, payload });

// 获取信息(demo)
export const getListAction = (data) => ({
  // 把得到的数据放到Redux的store中
  type: types.GET_LIST,
  data
});
