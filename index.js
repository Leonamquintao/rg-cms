import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';


/* Solução temporaria pra remover os warnings no Simulador */
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
	'Warning: componentWillMount is deprecated',
	'Warning: componentWillUpdate is deprecated',
	'Warning: componentWillReceiveProps is deprecated',
]);

//redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';


const RGCMS = () => (
	<Provider store={ store }>
		<PersistGate loading={null} persistor={persistor} >
			<App />
		</PersistGate>
	</Provider>
);
  
AppRegistry.registerComponent(appName, () => RGCMS);
