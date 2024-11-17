import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BookingScreen({ navigation }) {
  const [destination, setDestination] = useState('');

  const handleBook = () => {
    if (destination) {
      navigation.navigate('Map', { destination });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Your Cab</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <Button title="Book Now" onPress={handleBook} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
