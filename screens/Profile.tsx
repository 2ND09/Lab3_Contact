import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ContactThumbnail from "@/components/ContactThumbnail";
import DetailListItem from "@/components/DetailListItem";
import { colors } from "@/utility/colors";
import { fetchRandomContact } from "@/utility/api";

export default function ProfileScreen({ route }: any) {
	const [contact, setContact] = useState({} as any);
	useEffect(() => {
		if (route.params?.contact) {
			setContact(route.params.contact);
		} else fetchRandomContact().then((contact) => setContact(contact));
	}, []);

	const { avatar, phone, cell, email } = contact;

	console.log(contact);
	const name = contact.name
		? `${contact.name.title} ${contact.name.first} ${contact.name.last}`
		: "";
	return (
		<View style={styles.container}>
			<View style={styles.avatarSection}>
				<ContactThumbnail
					avatar={avatar}
					name={name}
					phone={phone}
					textColor={""}
					onPress={function (): void {
						throw new Error("Function not implemented.");
					}}
				/>
			</View>
			<View style={styles.detailsSection}>
				<DetailListItem title="Work" subtitle={phone || "N/A"} icon={"phone"} />
				<DetailListItem title="Email" subtitle={email || "N/A"} icon={"mail"} />
				<DetailListItem
					title="Personal"
					subtitle={cell || "N/A"}
					icon={"smartphone"}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	avatarSection: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.blue,
	},
	detailsSection: {
		flex: 1,
		backgroundColor: "white",
	},
});
