import React from "react";
import { StyleSheet, View } from "react-native";
import DetailListItem from "../components/DetailListItem";

export default function OptionsScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<DetailListItem title="Update Profile" icon={""} subtitle={""} />
			<DetailListItem
				title="Change Theme"
				icon={""}
				subtitle={""}
				onPress={() => {}}
			/>
			<DetailListItem title="Change Language" icon={""} subtitle={""} />
			<DetailListItem title="Sign Out" icon={""} subtitle={""} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
});
