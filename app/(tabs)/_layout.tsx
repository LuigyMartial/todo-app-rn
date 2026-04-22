import { Tabs } from 'expo-router';
import {Ionicons} from "@expo/vector-icons";

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "green",
            tabBarStyle: {
                paddingTop: 10,
                paddingBottom: 30,
                height: 90,
                backgroundColor: "#1e293b",
                borderTopWidth: 1,
                borderTopColor: "yellow"
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "600"
            },
            headerShown: false
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Todos",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="flash-outline" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}

export default  TabsLayout;