import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Switch, TextInput } from 'react-native-gesture-handler';
import { RootStackParamList } from '../App';

type Props = StackScreenProps<RootStackParamList>;

export const ColorPaletteModal: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleSubmit = useCallback(() => {
    if (!name) {
      return Alert.alert('Please enter a palette name');
    }

    const newColorPalette = {
      paletteName: name,
      colors: [],
    };

    navigation.navigate('Home', { newColorPalette });
  }, [name, navigation]);

  return (
    <View style={style.container}>
      <Text style={style.name}>Name of the palette</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={style.input}
        placeholder="Palette name"
      />
      <View style={style.color}>
        <Text>Color Name</Text>
        <Switch value={true} onValueChange={() => {}} />
      </View>
      <TouchableOpacity style={style.button} onPress={handleSubmit}>
        <Text style={style.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  name: {
    marginBottom: 10,
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});
