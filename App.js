import { View, Text } from "react-native";
import HomePage from "./components/Home/HomePage";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InitialScreen from "./components/InitialScreen/InitialScreen";
import ProductList from "./components/ProductList/ProductList";
import ProductDetailScreen from "./components/ProductDetail/ProductDetail";
import OrderProductScreen from "./components/OrderProductScreen/OrderProductScreen";
import ViewOrderScreen from "./components/ViewOrderScreen/ViewOrderScreen";
const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator InitialScreen="InitialScreen">
                <Stack.Screen name="InitialScreen" component={InitialScreen} />
                <Stack.Screen name="MainNavigation" component={Navigation} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="ProductList" component={ProductList} />
                <Stack.Screen
                    name="ProductDetail"
                    component={ProductDetailScreen}
                />
                <Stack.Screen
                    name="OrderProduct"
                    component={OrderProductScreen}
                />
                <Stack.Screen
                    name="ViewOrderScreen"
                    component={ViewOrderScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
