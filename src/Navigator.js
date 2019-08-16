import { createAppContainer, createDrawerNavigator } from 'react-navigation';

// Pages
import Blank from './pages/Blank';
import Login from './pages/Login';
import Home from './pages/Home';
import TermsOfUse from './pages/TermsOfUse';
import TabNavigator from './pages/TabNavigator';

// Components
import SideMenu from './components/SideMenu';
import ExitComponent from './components/ExitComponent';

const drawerNavigator = createDrawerNavigator({
  Login: { 
    screen : Login, 
    navigationOptions: ({navigation}) =>  ({ 
      drawerLockMode: 'locked-closed' 
    })
  },
  Home: { screen : Home },
  TabNavigator: { screen : TabNavigator,
    navigationOptions: ({}) => ({
      drawerLockMode: 'locked-closed'
    })
   },
  Blank: { screen : Blank },
  TermsOfUse: { screen : TermsOfUse },
  Exit: { screen: ExitComponent,
    navigationOptions: ({}) => ({
      drawerLockMode: 'locked-closed'
    })
  },
},
{
  initialRouteName: 'Login',
  contentComponent: SideMenu
})

export default createAppContainer(drawerNavigator);

 