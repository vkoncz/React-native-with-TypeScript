import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
  navigation;
}

export const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette');
        }}>
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};
