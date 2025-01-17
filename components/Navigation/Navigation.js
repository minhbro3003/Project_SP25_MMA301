import { Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../Home/HomePage";
import { HomeImg, TaskImg, InboxImg, ProfileImg } from "../theme/Images";
import ProductList from "../ProductList/ProductList";
const Tab = createBottomTabNavigator();

const CustomTabIcon = ({ source, focused }) => {
    return (
        <Image
            source={source}
            style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#20bf55" : "black",
            }}
        />
    );
};

export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#20bf55",
                tabBarInactiveTintColor: "black",
                tabBarStyle: { paddingBottom: 10, height: 60 },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={ProductList}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomTabIcon source={HomeImg} focused={focused} />
                    ),
                    tabBarLabel: "Home",
                }}
            />
            <Tab.Screen
                name="Task"
                component={HomePage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomTabIcon source={HomeImg} focused={focused} />
                    ),
                    tabBarLabel: "Task",
                }}
            />
            {/* <Tab.Screen
            name='Task'
            component={Task}
            options={{
                tabBarIcon:({focused}) => (
                    <CustomTabIcon  source={TaskImg} focused={focused} />
                ),
                tabBarLabel:'Task'
            }}
        />
        <Tab.Screen
            name='Inbox'
            component={Inbox}
            options={{
                tabBarIcon:({focused}) => (
                    <CustomTabIcon  source={InboxImg} focused={focused} />
                ),
                tabBarLabel:'Inbox'
            }}
        />
        <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
                tabBarIcon:({focused}) => (
                    <CustomTabIcon  source={ProfileImg} focused={focused} />
                ),
                tabBarLabel:'Profile'
            }}
        /> */}
        </Tab.Navigator>
    );
}
