import React, { Component } from 'react';
import { Alert, BackHandler } from 'react-native';

import AppDrawerNavigator from './src/Navigator'

export default class App extends Component {

  constructor(props) { 
    super(props);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  render() {
    return (
      <AppDrawerNavigator />
    );
  }

  /* METHODS */
  handleBackPress() {
    Alert.alert(
      'Atenção! 😓',
      `Deseja mesmo sair do EstaciON ?`,
      [
        { text: 'Cancelar', style: 'cancel', onPress: () => { } },
        { text: 'Sim', onPress: () =>  { BackHandler.exitApp(); } },
      ],
      { cancelable: false },
    );
    return true;
  }
};