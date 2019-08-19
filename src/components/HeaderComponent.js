import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

const HeaderComponent = props => {

  const { iconStyle } = styles;
  return (
    <Header>
      <Left>
        <Button transparent onPress={ () => props.navigation.openDrawer() }>
          <Icon name='bars' style={iconStyle}/>
        </Button>
      </Left>
      <Body>
        <Title>{ props.headerText }</Title>
      </Body>
      <Right>
        <Button transparent onPress={() => alert('to be continued...') }>
          <Icon name='cog' style={iconStyle}/>
        </Button>
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 24,
    color: Platform.OS === 'ios' ? '#0f0f0f' : '#FFF'
  }
});

export default withNavigation(HeaderComponent);