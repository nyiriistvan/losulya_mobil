// File: App.js
// Author: Nyiri István
// Copyright: 2023, Nyiri István
// Group: Szoft_II_N
// Date: 2023-04-17
// Github: https://github.com/nyiriistvan/
// Licenc: GNU GPL 

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';

const App = () => {
  const [chestCircumference, setChestCircumference] = useState('');
  const [givenLength, setGivenLength] = useState('');
  const [horseWeight, setHorseWeight] = useState(null);

  const calculateHorseWeight = () => {
    const chest = parseFloat(chestCircumference);
    const length = parseFloat(givenLength);
    const weight = (chest ** 2 * length) / 330;
    setHorseWeight(weight.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Készítette: Nyiri István</Text>
        <Text style={styles.headerText}>Osztály: Szoft_II_N</Text>
        <Text style={styles.headerText}>Dátum: {new Date().toLocaleDateString()}</Text>
        </View>
      <Input
        label="Ló kerülete (CM)"
        value={chestCircumference}
        onChangeText={setChestCircumference}
        keyboardType="numeric"
      />
      <Input
        label="Ló hosszúsága (CM)"
        value={givenLength}
        onChangeText={setGivenLength}
        keyboardType="numeric"
      />
      <Button
        title="Ló súlyának számítása"
        onPress={calculateHorseWeight}
        disabled={!chestCircumference || !givenLength}
      />
      {horseWeight && (
        <Text style={styles.result}>
          Ló súlya: {horseWeight} kg
        </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(20),
  },
  header: {
    marginBottom: moderateScale(20),
  },
  headerText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    marginTop: moderateScale(20),
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
});

export default App;