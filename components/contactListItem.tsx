import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageSourcePropType,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { colors } from "../utility/colors";

const { width } = Dimensions.get("window");

interface ContactListItemProps {
	name: string;
	avatar: ImageSourcePropType;
	phone: string;
	favorite: boolean;
	onPress: () => void;
  onLongPress?: () => void;
}

export function ContactListItem({
	name,
	avatar,
	phone,
	favorite,
	onPress,
  onLongPress,
}: ContactListItemProps) {
	console.table({ name, avatar, phone, onPress });
	return (
		<TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
			<View style={styles.contactInfo}>
				<Image style={styles.avatar} source={avatar} />
				<View style={styles.details}>
					<Text style={styles.title}>{name}</Text>
					<Text style={styles.subtitle}>{phone}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: width * 0.06,
	},
	contactInfo: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: width * 0.04,
		paddingRight: width * 0.06,
		borderBottomColor: colors.gray,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	avatar: {
		borderRadius: width * 0.055,
		width: width * 0.11,
		height: width * 0.11,
	},
	details: {
		marginLeft: width * 0.04,
	},
	title: {
		fontSize: width * 0.04,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: width * 0.035,
		color: colors.gray,
	},
});
