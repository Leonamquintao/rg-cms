import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent'

export default class Settings extends Component {
	render() {

		const { container, txt, content } = styles;

		return (
			<View style={container}>
				<HeaderComponent headerText={'Settings'} />
				<ScrollView>

					<View style={content}>
						<Text style={txt}>Settings Page</Text>
					</View>
					
				</ScrollView>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
    alignItems: 'center',
    marginTop: '50%'
	},
	txt: {
		fontWeight: 'bold'
	}
});