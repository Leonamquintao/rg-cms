import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class ExitComponent extends Component {

  constructor(props) { super(props); }

  componentWillMount() {
    this.logoffRoutine();
  }
  
  logoffRoutine() {
    this.props.logoff(false);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.exit}>
        <StatusBar barStyle="dark-content" />
        <ActivityIndicator size="large" color="#2cc976" />
      </View>
    );
  }
};

const mapStateToProps = state => {
	return { mainState: state.mainState }
}

export default connect(mapStateToProps, actions)(ExitComponent);

const styles = StyleSheet.create({
  exit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
