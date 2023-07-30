import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { NativeWindStyleSheet } from "nativewind";
import "react-native-url-polyfill/auto";
import RestaurantScreen from "./screens/RestaurantScreen";
import { store } from "./store";
import { Provider } from "react-redux";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          />

          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
