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
          Estimated Weight: {horseWeight} lbs
        </Text>
      )}
    </View>
  );
}