import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';

import { connect } from 'react-redux';
import * as actions from '.././store/actions';

class Home extends Component {

	constructor(props) {
    super(props);
	}

	componentWillMount() {
    if(this.props.mainState.logged == false) {
      this.props.navigation.navigate('Login');
    }
	}
	
	render() {

		const { container, txt, content } = styles;

		return (
			<View style={container}>
				<HeaderComponent headerText={'Home'} />
				<ScrollView>

					<View style={content}>
						<Text style={txt}>Home Page</Text>
					</View>
					
				</ScrollView>
			</View>
		);
	}
};

const mapStateToProps = state => {
	return { mainState: state.mainState }
}

export default connect(mapStateToProps, actions) (Home);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		alignItems: 'center'
	},
	txt: {
		fontWeight: 'bold'
	}
});