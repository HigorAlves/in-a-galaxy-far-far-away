import React from 'react';
import ReactDOM from 'react-dom';

import App from 'Pages';

import Theme from 'Assets/Theme/GlobalStyle';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Theme />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
