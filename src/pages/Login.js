import React, { Component } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, ImageBackground, Dimensions, StatusBar, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Form, Item, Label, Input, Button } from 'native-base';

import { connect } from 'react-redux';
import * as actions from '.././store/actions';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const LOGO = require('.././assets/images/logo.png');

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = { logged: false, user: '', password: '', isDisabled: false };
	}

	componentWillMount() {
    if(this.props.mainState.logged == true) {
      this.props.navigation.navigate('Home');
    }
	}

	render() {

		const { container, formStyle, logo, logoPos, btnContainer, buttomStyle, btnText, btnLink } = styles;
		
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<SafeAreaView style={container}>
					<StatusBar barStyle="dark-content" />

					<Form style={formStyle}>

						<View style={logoPos}>
							<Image source={LOGO} style={logo} />
						</View>

						<Item floatingLabel>
							<Label>User</Label>
							<Input autoCorrect={false} autoCapitalize='none' 
								onChangeText={(user)=>this.setState({user})} value={this.state.user} />
						</Item>

						<Item floatingLabel>
							<Label style={styles.label}>Password</Label>
							<Input autoCorrect={false} autoCapitalize='none' secureTextEntry 
								onChangeText={(password)=>this.setState({password})} value={this.state.password} />
						</Item>

						<View style={btnContainer}>
							<Button rounded primary block style={buttomStyle}
								onPress={ this.submit.bind(this) } disabled={this.state.isDisabled}>
								<Text style={btnText}>Entrar</Text>
							</Button>
						</View>

						<View style={btnContainer}>
							<Button transparent light onPress={ () => alert('Forgot Password') }>
								<Text style={btnLink}>Esqueci a Senha</Text>
							</Button>
						</View>
		
					</Form>

				</SafeAreaView>
			</TouchableWithoutFeedback>
		);
	}

	/* METHODS */
	submit() {
		Keyboard.dismiss();
		this.props.setLogged(true);
		this.props.navigation.navigate('Home');
	}
};

const mapStateToProps = state => {
	return { mainState: state.mainState }
}

export default connect(mapStateToProps, actions) (Login);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: height,
    width: width,
		justifyContent: 'center',
	},
	formStyle: {
		padding: 10
	},
	logo: {
		width: 240,
    height: 140,
    resizeMode:'contain'
	},
	logoPos:{
		justifyContent: 'center',
    alignItems: 'center',
	},
	btnContainer: {
		marginTop: 10,
		alignItems: 'center'
	},
	btnText: {
		color: '#FFF',
    fontWeight: 'bold',
	},
	btnLink: {
		color: '#273469',
		fontWeight: 'bold',
	},
	buttomStyle: {
		backgroundColor: '#273469'
	}
});