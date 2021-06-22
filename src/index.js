import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// 引入全局样式
import './assets/style/index.scss';
// 根组件
import App from './app/App';
import TestReduxHooks from './examples/TestReduxHooks.js'
import TestLazy from './examples/TestLazy'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route  path="/test" component={TestReduxHooks} />
          <Route  path="/lazy" component={TestLazy} />
        </Switch>
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
