import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';


ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
				<HashRouter>
					<Switch>
						<Route exact path="/" component={App} />
					</Switch>
				</HashRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
