import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent'

export default class Blank extends Component {
	render() {

		const { container, content, txt } = styles;

		return (
			<View style={container}>
				<HeaderComponent headerText={'Blank'} />
				<ScrollView>

					<View style={content}>
						<Text style={txt}>Blank Page</Text>
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