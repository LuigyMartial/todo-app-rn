import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import useTheme, {ColorScheme} from "@/hooks/useTheme";


export default function Index(){
    const { toggleDarkMode, colors } = useTheme();
    const styles = createStyles(colors);

    return (
      <View style={styles.container}>
          <Text style={styles.content}>Edit app/index.tsx to edit this screen.</Text>
          <Text>hi</Text>
          <TouchableOpacity onPress={toggleDarkMode}>
              <Text>toggle the mode</Text>
          </TouchableOpacity>
      </View>
    );
}

const createStyles = (colors: ColorScheme) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1, // column
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            backgroundColor: colors.bg,
        },
        content: {
            fontSize: 22
        }
    });

    return styles;
}

