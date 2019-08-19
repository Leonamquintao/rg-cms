import React,{ useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '.././store/actions';



const ExitComponent = props => {
  
  useEffect(() => {
    props.logoff(false);
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 1000);
  }, [])
  
  return (
    <View style={styles.exit}>
      <StatusBar barStyle="dark-content" />
      <ActivityIndicator size="large" color="#3d444e" />
    </View>
  );
  
}

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
