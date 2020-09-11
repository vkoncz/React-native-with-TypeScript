import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home';
import { ColorPalette } from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';

export type ColorPalette = {
  paletteName: string;
  colors: HexColor[];
};

export type RootStackParamList = {
  Home: undefined;
  ColorPalette: ColorPalette;
};

export type HexColor = {
  colorName: string;
  hexCode: string;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
