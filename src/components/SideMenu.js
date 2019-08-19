import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import * as actions from '.././store/actions';

const usr = require('.././assets/images/user.png');

const routes =[
  { name: 'Home', path: 'Home', icon: 'home' },
  { name: 'Blank', path: 'Blank', icon: 'file-code-o' },
  { name: 'Terms', path: 'TermsOfUse', icon: 'list' },
  { name: 'Dashboard', path: 'DashBoard', icon: 'th' },
  { name: 'Sair',  path: 'Exit', icon: 'sign-out' },
];

class SideMenu extends Component {

  constructor(props) { 
    super(props);
  }
  
  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: 'center'}}>
            <Image source={usr} style={styles.userImage} />
            <Text style={{ fontWeight: 'bold', marginTop: 10 }}> USER NAME </Text>
            <Text style={{ fontSize: 12, color: '#a2a4a5' }}> USER INFO </Text>
          </View>

          <View style={{marginTop: 20}}>
            { this.renderRoutes(routes) }
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Text>Versão 1.0.0</Text>
        </View>
      </View>
    );
  }

  /* METHODS */
  navigatePage(route) {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.closeDrawer()
    this.props.navigation.dispatch(navigateAction);
  }

  renderRoutes(routes) {
    return(
      routes.map((route, index) => 
        <TouchableOpacity onPress={() => this.navigatePage(route.path)} key={index}>
          <View style={styles.menu}>
            <View style={{ width: '85%', flexDirection: 'row' }}>
              <Icon name={route.icon} style={styles.menuItem} />
              <Text style={styles.menuItem}>{route.name}</Text>
            </View>
            <View style={{ width: '15%' }}>
              { this.renderBadge(route.name) }
            </View>
            
          </View>
        </TouchableOpacity>
      )
    );
  }

  renderBadge(name) {
    if(name == 'Dashboard') {
      return (
        <View style={styles.badgeConteiner}>
          <Text style={styles.badge}> 3 </Text>
        </View>
      )
    }
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps, actions) (SideMenu)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  userImage: {
    width: 140,
    height: 140,
    alignItems: 'center',
    resizeMode:'contain'
  },
  usrDetails: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 4,
    marginRight: 4,
  },
  menuItem: {
    margin: 4,
    fontSize: 18,
    margin: 10,
    color: '#3d444e'
  },
  badgeConteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b32a1b',
    borderRadius: 25,
    marginTop: 6,
    marginBottom: 6
  },
  badge: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12
  },
  footer: {
    padding: 20,
    color: '#3d444e',
    alignItems: 'center',
  }
})
