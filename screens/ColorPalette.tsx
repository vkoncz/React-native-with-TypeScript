import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';
import { MainStackParamList } from '../App';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<MainStackParamList, 'ColorPalette'>;

export const ColorPalette: React.FC<Props> = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
  },
});
