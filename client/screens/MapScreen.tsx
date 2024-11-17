import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

export default function MapScreen({ route }) {
  const { destination } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.info}>Traveling to: {destination}</Text>
      <MapView style={styles.map}>
        <Marker coordinate={{ latitude: 37.7749, longitude: -122.4194 }} title="Pickup" />
        <Marker coordinate={{ latitude: 37.8715, longitude: -122.2730 }} title="Destination" />
        <Polyline
          coordinates={[
            { latitude: 37.7749, longitude: -122.4194 },
            { latitude: 37.8715, longitude: -122.2730 },
          ]}
          strokeWidth={3}
          strokeColor="blue"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    padding: 10,
    fontSize: 16,
  },
  map: {
    flex: 1,
  },
});
