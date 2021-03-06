import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

render(
	<React.Fragment>
		<FirebaseContext.Provider value={{ firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</React.Fragment>,
	document.getElementById('root')
);
