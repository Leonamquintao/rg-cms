import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent'

export default class Home extends Component {
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