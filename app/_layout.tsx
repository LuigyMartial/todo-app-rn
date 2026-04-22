import { Stack } from "expo-router";
import {ThemeProvider} from "@/app/hooks/useTheme";

export default function RootLayout(){
    return (
        <ThemeProvider>
            <Stack screenOptions={{ headerShown: false}}>
                <Stack.Screen name="(tabs)" />
            </Stack>
        </ThemeProvider>
    );
}