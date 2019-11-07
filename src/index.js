import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';

import App from './containers/App';

import './index.css';
import 'antd/lib/button/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/spin/style/css';

import * as serviceWorker from './serviceWorker';

const target = document.querySelector('#root');

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
