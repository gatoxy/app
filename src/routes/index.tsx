import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Movies } from "../screens/Movies";
import { Series } from "../screens/Series";
import { Favorites } from "../screens/Favorites";
import { Details } from "../screens/Details";

export type RootStackParamList = {
  Home: undefined;
  Movies: undefined;
  Series: undefined;
  Details: { id: number, type: string };
  Favorites: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Series" component={Series} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}