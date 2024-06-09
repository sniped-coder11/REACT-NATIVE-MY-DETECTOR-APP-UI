const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Screen1 from "./screens/Screen1";
import IPhone1314 from "./screens/IPhone1314";
import DefaultMarkerComponent from "./components/DefaultMarkerComponent";
import DefaultMarkerComponent1 from "./components/DefaultMarkerComponent1";
import Frame from "./screens/Frame";
import Frame1 from "./screens/Frame1";
import Frame2 from "./screens/Frame2";
import Frame3 from "./screens/Frame3";
import Frame4 from "./screens/Frame4";
import Frame5 from "./screens/Frame5";
import Image1 from "./components/Image1";
import Image2 from "./components/Image2";
import IPhone13141 from "./screens/IPhone13141";
import IPhone13142 from "./screens/IPhone13142";
import IPhone13143 from "./screens/IPhone1314";
import Frame6 from "./screens/Frame";
import IPhone131411 from "./screens/IPhone13141";
import IPhone13149 from "./screens/IPhone13149";
import IPhone131410 from "./screens/IPhone131410";
import IPhone131421 from "./screens/IPhone13142";
import IPhone131431 from "./screens/IPhone13143";
import IPhone13144 from "./screens/IPhone13144";
import IPhone13145 from "./screens/IPhone13145";
import IPhone13146 from "./screens/IPhone13146";
import IPhone13147 from "./screens/IPhone13147";
import IPhone13148 from "./screens/IPhone13148";
import CircleWaveLoader from "./screens/CircleWaveLoader";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Adamina-Regular": require("./assets/fonts/Adamina-Regular.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Assistant-Regular": require("./assets/fonts/Assistant-Regular.ttf"),
    "AbhayaLibre-Bold": require("./assets/fonts/AbhayaLibre-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Screen1"
              component={Screen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1314"
              component={IPhone1314}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={Frame5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13141"
              component={IPhone13141}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13142"
              component={IPhone13142}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13143"
              component={IPhone13143}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame6"
              component={Frame6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131411"
              component={IPhone131411}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13149"
              component={IPhone13149}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131410"
              component={IPhone131410}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131421"
              component={IPhone131421}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone131431"
              component={IPhone131431}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13144"
              component={IPhone13144}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13145"
              component={IPhone13145}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13146"
              component={IPhone13146}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13147"
              component={IPhone13147}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13148"
              component={IPhone13148}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CircleWaveLoader"
              component={CircleWaveLoader}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
