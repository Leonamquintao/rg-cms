import React, { Component } from 'react';
import { Alert, BackHandler } from 'react-native';

import AppNavigator from './src/AppNavigator'

import { connect } from 'react-redux';
import * as actions from './src/store/actions';

class App extends Component {

  constructor(props) { 
    super(props);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress.bind(this));
  }

  render() {
    return (
      <AppNavigator />
    );
  }

  /* METHODS */
  handleBackPress() {
    Alert.alert(
      'Atenção! 😓',
      `Deseja mesmo sair do App ?`,
      [
        { text: 'Cancelar', style: 'cancel', onPress: () => { } },
        { text: 'Sim', onPress: () =>  { BackHandler.exitApp(); } },
      ],
      { cancelable: false },
    );
    return true;
  }
};

const mapStateToProps = state => {
	return { mainState: state.mainState }
}

export default connect(mapStateToProps, actions) (App);