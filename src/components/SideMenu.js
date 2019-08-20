import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Thumbnail, Button } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '.././store/actions';

const routes =[
  { name: 'Home', path: 'Home', icon: 'home' },
  { name: 'Blank', path: 'Blank', icon: 'file-code-o' },
  { name: 'Terms', path: 'TermsOfUse', icon: 'list' },
  { name: 'Dashboard', path: 'DashBoard', icon: 'th' },
  { name: 'Sair',  path: 'Exit', icon: 'sign-out' },
];

const users = [
  { name: 'Todos', image: require('.././assets/images/user.png') },
  { name: 'João', image: require('.././assets/images/user1.jpg') },
  { name: 'Mary', image: require('.././assets/images/user2.jpg') },
]
class SideMenu extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      selectedUser: users[0]
    };
  }
  
  render() {
    return(
      <View style={styles.container}>
        
        <View style={styles.accounts}>

          <ScrollView>
            <View style={{ alignItems: 'center', marginTop: 20, flexDirection: 'column' }}>
              { this.renderUsers() }
            </View>
          </ScrollView>

          <View style={{ alignItems: 'center', margin: 10 }}>

            <Text>Add</Text>
            <Button transparent light onPress={() => alert('add user')}>
              <Icon size={30} color={'#7e8082'} name='plus' />
            </Button>
          </View>

        </View>
        
        <View style={{ flex: 1 }}>
          <Text style={styles.accountName}>{this.state.selectedUser.name}</Text>
            <View style={styles.divider} />
            <ScrollView>
              { this.renderRoutes(routes) }
            </ScrollView>
            <View style={styles.divider} />

            <View style={styles.footer}>
              <Text>Versão 1.0.0</Text>
            </View>
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

  selectUser(usr) {
    console.log()
    this.setState({ selectedUser: usr })
  }

  renderRoutes(routes) {
    return(
      routes.map((route, index) => 
        <TouchableOpacity onPress={() => this.navigatePage(route.path)} key={index}>
          <View style={styles.menu}>
            <View style={{ width: '75%', flexDirection: 'row'}}>
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

  renderUsers() {
    return(
      users.map((user, index) => 
        <TouchableOpacity style={{ margin: 5, alignItems: 'center' }} 
        onPress={() => this.selectUser(user)} key={index}>
          <Thumbnail style={{ borderWidth: 0.8, borderColor: '#4da8b0' }} source={user.image} />
          <Text>{user.name}</Text>
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
    flexDirection: 'row',
    paddingTop: 24,
    backgroundColor: '#FFF'
  },
  accounts: {
    width: 70,
    backgroundColor: '#e1e4e8'
  },
  accountName: {
    marginTop: 10,
    textAlign: 'center'
  },
  divider: { 
    borderBottomColor: '#cbccd4', 
    borderBottomWidth: 1, 
    width: '100%', 
    marginTop: 10
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
    flexDirection: 'row',
    margin: 8
  },
  menuItem: {
    marginRight: 10,
    fontSize: 18,
    color: '#3d444e'
  },
  badgeConteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b32a1b',
    borderRadius: 25
  },
  badge: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
    margin: 5
  },
  footer: {
    padding: 20,
    color: '#3d444e',
    alignItems: 'center',
  }
})
