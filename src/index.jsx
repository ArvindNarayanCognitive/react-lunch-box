import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store/storeConfig';

ReactDOM.render(
	<AppContainer>
		<Provider store={store()}>
			<App />
		</Provider>
	</AppContainer>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
