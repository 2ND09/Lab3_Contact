import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ActivityIndicator,
} from "react-native";
import { fetchContacts } from "../utility/api";
import ContactThumbnail from "../components/ContactThumbnail";
import { NavigationProp } from "@react-navigation/native";

const keyExtractor = ({ phone }: { phone: string }) => phone;

export default function FavoritesScreen({
	navigation,
}: {
	navigation: NavigationProp<any>;
}) {
	const [contacts, setContacts] = useState<
		{ avatar: string; favorite: boolean; phone: string }[]
	>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			const favorites = contacts.filter((contact) =>
				globalThis.favoriteContacts.has(contact.phone) && contact.favorite
			);
			setContacts(favorites);
		});

		const fetchAndSetContacts = async () => {
			try {
				const fetchedContacts = await fetchContacts();
				setContacts(fetchedContacts);
				console.log("Fetched Contacts:", fetchedContacts);
			} catch (e) {
				console.error(e);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		if (globalThis.favoriteContacts.size === 0) {
			fetchAndSetContacts();
		} else {
			const favorites = contacts.filter((contact) => {
				console.log("Checking contact:", contact.phone, contact.favorite);
				return globalThis.favoriteContacts.has(contact.phone) && contact.favorite;
			});
			setContacts(favorites);
			setLoading(false);
		}

		return unsubscribe;
	}, [navigation]);

	const favorites = contacts.filter((contact) => contact.favorite);

	return (
		<View style={styles.container}>
			{loading && (
				<ActivityIndicator
					color={"blue"}
					size={"large"}
					style={styles.loadingIndicator}
				/>
			)}
			{error && <Text>Error loading favorites...</Text>}
			{!loading && !error && favorites.length === 0 && (
				<Text>No favorites found.</Text>
			)}
			{!loading && !error && favorites.length > 0 && (
				<FlatList
					data={favorites}
					keyExtractor={keyExtractor}
					numColumns={3}
					contentContainerStyle={styles.list}
					renderItem={renderFavoriteThumbnail}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		justifyContent: "center",
		flex: 1,
	},
	list: {
		alignItems: "center",
	},
	loadingIndicator: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});