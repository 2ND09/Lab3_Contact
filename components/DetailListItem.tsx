import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/MaterialIcons";

import { colors } from "../utility/colors";

const DetailListItem = ({
	icon,
	title,
	subtitle,
	onPress = () => {},
}: {
	icon: string;
	title: string;
	subtitle?: string;
	onPress?: () => void;
}) => {
	return (
		<TouchableHighlight
			underlayColor={colors.gray}
			style={styles.container}
			onPress={onPress}
		>
			<View style={styles.detailInfo}>
				<View style={styles.iconContainer}>
					<Icon name={icon} size={24} color={colors.black} />
				</View>
				<View style={styles.contentContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.subtitle}>{subtitle}</Text>
				</View>
			</View>
		</TouchableHighlight>
	);
};

DetailListItem.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 24,
	},
	detailInfo: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 16,
		paddingBottom: 16,
		paddingRight: 24,
		borderBottomColor: colors.gray,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	iconContainer: {
		width: 32,
		height: 32,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.gray,
		borderRadius: 16,
	},
	contentContainer: {
		justifyContent: "center",
		flex: 1,
		marginLeft: 20,
	},
	title: {
		color: colors.black,
		fontWeight: "bold",
		fontSize: 16,
	},
	subtitle: {
		color: colors.blue,
		fontSize: 15,
		marginTop: 4,
	},
});

export default DetailListItem;
