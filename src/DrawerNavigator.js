import { createAppContainer, createDrawerNavigator } from 'react-navigation';

// Pages
import Blank from './pages/Blank';
import Home from './pages/Home';
import TermsOfUse from './pages/TermsOfUse';

// Components
import SideMenu from './components/SideMenu';
import ExitComponent from './components/ExitComponent';

// innerNavigation
import TabNavigator from './TabNavigator';

const drawerNavigator = createDrawerNavigator({
  Home: { screen : Home },
  Blank: { screen : Blank },
  TermsOfUse: { screen : TermsOfUse },
  Dashboard: { screen : TabNavigator },
  Exit: { screen: ExitComponent,
    navigationOptions: ({}) => ({
      drawerLockMode: 'locked-closed'
    })
  },
},
{
  initialRouteName: 'Home',
  contentComponent: SideMenu
})

export default createAppContainer(drawerNavigator);

 