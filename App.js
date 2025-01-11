import { View, Text } from "react-native";
import HomePage from "./components/Home/HomePage";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InitialScreen from "./components/InitialScreen/InitialScreen";
const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator InitialScreen="InitialScreen">
                <Stack.Screen name="InitialScreen" component={InitialScreen} />
                <Stack.Screen name="MainNavigation" component={Navigation} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
            </Stack.Navigator>

            {/* <HomePage />
            <View></View> */}
        </NavigationContainer>
    );
}
