import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

// Pages
import DashBoard from './pages/DashBoard';
import Licence from './pages/Licence';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

const TabNavigator = createBottomTabNavigator(
  {
    DashBoard,
    Licence,
    Notifications,
    Settings,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        let badge = 0;

        switch (routeName) {
          case 'DashBoard':
            iconName = 'tachometer';
            break;
          case 'Settings':
            iconName = 'cogs';
            break;
          case 'Notifications':
            iconName = 'bell-o', badge = 3;
            break;
          default:
            iconName = 'file-o';
            break;
        }

        return (
          <IconWithBadge size={22} name={iconName} color={ focused ? tintColor : '#888a8f' } badgeCount={badge} />
        );

      }
    }),
    tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#F5F6FA',
      style: {
        backgroundColor: '#3F51B5',
      },
    },
    
  },
);

const IconWithBadge = props => {

  const { name, badgeCount, color, size } = props;

  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Icon name={name} size={size} color={color} />
      { badgeCount > 0 && (
        <View style={{
          position: 'absolute',
          right: -6,
          top: -3,
          backgroundColor: 'red',
          borderRadius: 10,
          width: 16,
          height: 16,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{ color: '#FFF', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
}

export default createAppContainer(TabNavigator);

 