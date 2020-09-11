import React from 'react';
import { Text, View, StyleSheet, TextStyle } from 'react-native';

interface Props {
  colorName: string;
  hexCode: string;
}

const ColorBox: React.FC<Props> = ({ colorName, hexCode }) => {
  const boxColor: TextStyle = {
    backgroundColor: hexCode,
  };

  const textColor: TextStyle = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={(styles.boxText, textColor)}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxText: {
    fontWeight: 'bold',
    color: 'white',
  },
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 10,
  },
});

export default ColorBox;
