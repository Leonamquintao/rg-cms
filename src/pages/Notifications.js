import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


export default class Notifications extends Component {
	render() {

		const { container, txt, content } = styles;

		return (
			<View style={container}>
				<ScrollView>

					<View style={content}>
						<Text style={txt}>Notifications Page</Text>
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