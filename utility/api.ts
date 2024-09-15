import "react-native-get-random-values";
import { v4 } from "uuid";

export interface Contact {
	id: string;
	name: { title: string; first: string; last: string };
	picture: { large: string; medium: string; thumbnail: string };
	phone: string;
	cell: string;
	email: string;
	favorite: boolean;
}

const mapContact = (contact: {
	name: { title: string; first: string; last: string };
	picture: { large: string; medium: string; thumbnail: string };
	phone: string;
	cell: string;
	email: string;
	favorite: boolean;
}) => {
	return {
		id: v4(),
		name: contact.name,
		picture: contact.picture,
		phone: contact.phone,
		cell: contact.cell,
		email: contact.email,
		favorite: false,
	};
};

export const fetchContacts = async () => {
	try {
		const response = await fetch("https://randomuser.me/api/?results=100");
		const contactData = await response.json();
		return contactData.results.map(mapContact);
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const fetchUserContact = async (): Promise<Contact> => {
	try {
		const response = await fetch("https://randomuser.me/api/?seed=tamaisme");
		const userData = await response.json();
		return mapContact(userData.results[0] as Contact);
	} catch (error) {
		console.error(error);
		return {} as Contact;
	}
};

export const fetchRandomContact = async () => {
	try {
		const response = await fetch("https://randomuser.me/api/");
		const userData = await response.json();
		return mapContact(userData.results[0]);
	} catch (error) {
		console.error(error);
		return [];
	}
};
