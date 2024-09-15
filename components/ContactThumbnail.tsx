import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/MaterialIcons";

export type ContactThumbnailProps = {
	name: string;
	phone: string;
	avatar: string;
	textColor: string;
	onPress: () => void;
};

const ContactThumbnail = ({
	name = "",
	phone = "",
	avatar,
	textColor = "white",
	onPress = () => {},
}: ContactThumbnailProps) => {
	const colorStyle = {
		color: textColor,
	};

	return (
		<View style={styles.container}>
			{onPress !== null ? (
				<TouchableOpacity onPress={onPress}>
					<Image
						source={{
							uri: avatar,
						}}
						style={styles.avatar}
					/>
				</TouchableOpacity>
			) : (
				<View>
					<Image
						source={{
							uri: avatar,
						}}
						style={styles.avatar}
					/>
				</View>
			)}
			{name !== "" && <Text style={[styles.name, colorStyle]}>{name}</Text>}

			{phone !== "" && (
				<View style={styles.phoneSection}>
					<Icon name="phone" size={16} style={{ color: textColor }} />
					<Text style={[styles.phone, colorStyle]}>{phone}</Text>
				</View>
			)}
		</View>
	);
};

ContactThumbnail.propTypes = {
	name: PropTypes.string,
	phone: PropTypes.string,
	avatar: PropTypes.string,
	textColor: PropTypes.string,
	onPress: PropTypes.func,
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 30,
		marginHorizontal: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	avatar: {
		width: 90,
		height: 90,
		borderRadius: 45,
		borderColor: "white",
		borderWidth: 2,
	},
	name: {
		fontSize: 20,
		marginTop: 24,
		marginBottom: 2,
		fontWeight: "bold",
	},
	phoneSection: {
		flexDirection: "row",
		marginTop: 4,
		alignItems: "center",
		justifyContent: "center",
	},
	phone: {
		marginLeft: 4,
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default ContactThumbnail;
