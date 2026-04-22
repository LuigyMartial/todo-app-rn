import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index(){
    return (
      <View style={styles.container}>
          <Text style={styles.content}>Edit app/index.tsx to edit this screen.</Text>
          <Text>hi</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // column
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    content: {
        fontSize: 22
    }
})