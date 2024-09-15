import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import ContactThumbnail from "../components/ContactThumbnail";
import { Contact, fetchUserContact } from "../utility/api";
import { colors } from "../utility/colors";

export default function UserScreen({ navigation }: any) {
	const [user, setUser] = useState<Contact>({} as Contact);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetchUserContact()
			.then((contact: Contact) => {
				setUser(contact);
				setLoading(false);
				setError(false);
			})
			.catch((e) => {
				setLoading(false);
				setError(true);
			});
	}, []);

	const { picture, name, phone } = user || {};

	return (
		<View style={styles.container}>
			{loading && <ActivityIndicator size="large" color="#ffffff" />}
			{error && <Text>Error...</Text>}
			{!loading && !error && (
				<ContactThumbnail
					avatar={picture?.large}
					phone={phone}
					name={`${name?.title} ${name?.first} ${name?.last}`}
					onPress={() => {}}
					textColor={"white"}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.blue,
	},
});
