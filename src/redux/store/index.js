import { createStore, applyMiddleware } from 'redux';
// 持久化缓存
import { persistStore, persistReducer } from 'redux-persist';
// 日志
import { createLogger } from 'redux-logger'
// 支持异步的
import thunk from 'redux-thunk'
//  合并的根reducer
import rootReducer from '../reducers/index';

//  存储机制，当前使用sessionStorage, 可换成localStorage
import storageSession from 'redux-persist/lib/storage/session'

// 持久化缓存配置
const persistConfig = {
  key: 'root', // 必须有的
  storage: storageSession, // 缓存机制
  // blacklist: ['loginStatus'] reducer 里不持久化的数据,除此外均为持久化数据
  whitelist: [] // reducer 里持久化的数据,除此外均为不持久化数据
}
// 持久化的reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// 日志的配置
const logger = createLogger({
  // ...options
});
// store
let store = createStore(persistedReducer, applyMiddleware(logger, thunk));
export const persistor = persistStore(store)
export default store;

