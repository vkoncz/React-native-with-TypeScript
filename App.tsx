import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home';
import { ColorPalette } from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorPaletteModal } from './screens/ColorPaletteModal';

export type ColorPalette = {
  paletteName: string;
  colors: Color[];
};

export type RootStackParamList = {
  Main: undefined;
  ColorPaletteModal: undefined;
};

export type MainStackParamList = {
  Home: {
    newColorPalette?: ColorPalette;
  };
  ColorPalette: ColorPalette;
};

export type Color = {
  colorName: string;
  hexCode: string;
};

const MainStack = createStackNavigator<MainStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen
      name="ColorPalette"
      component={ColorPalette}
      options={({ route }) => ({ title: route.params.paletteName })}
    />
  </MainStack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ColorPaletteModal"
        component={ColorPaletteModal}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
