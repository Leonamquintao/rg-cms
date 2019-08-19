import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './pages/Login';
import AppDrawerNavigator from './DrawerNavigator';

const AppNavigator = createSwitchNavigator({
  Login: { screen: Login },
  Home: { screen: AppDrawerNavigator }
});

export default createAppContainer(AppNavigator);