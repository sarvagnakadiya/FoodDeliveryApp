/**
 * @format
 */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// import { AuthProvider } from './app/authentication/AuthProvider';
// import LoginScreen from './app/screens/LoginScreen';

// // const Providers = () => {
// //     return (
// //         <AuthProvider>
// //             <LoginScreen />
// //         </AuthProvider>
// //     );
// // }

// // export default Providers;

// AppRegistry.registerComponent(appName, () => App);
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/redux/store';

const store = configureStore();

const ReduxTutorial = () =>
    <Provider store={store}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => ReduxTutorial);