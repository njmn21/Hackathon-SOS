import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function ReportIncidentScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location.LocationObject | null>(null);


  // Maneja la selección de un punto en el mapa
  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ coords: { latitude, longitude } });
  };


  // Función para enviar el reporte con la ubicación seleccionada
  const handleSendReport = () => {
    if (selectedLocation) {
      const { latitude, longitude } = selectedLocation.coords;
      const message = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      console.log('Enviando reporte con la ubicación:', selectedLocation);
      console.log(message);

      // Mostrar un mensaje con los datos obtenidos
      Alert.alert('Reporte enviado', message);

      // Aquí puedes hacer la lógica para enviar el reporte, ejemplo con fetch
      /*
      fetch('https://tu-servidor.com/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude,
          longitude,
          message,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Reporte enviado exitosamente:', data);
      })
      .catch((error) => {
        console.error('Error al enviar el reporte:', error);
        alert('Hubo un error al enviar el reporte.');
      });
      */
    } else {
      alert('Por favor selecciona una ubicación en el mapa.');
    }
  };

  const handleSendActualUbication = () => {
    if (location) {
      const { latitude, longitude } = location.coords;
      const message = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      console.log('Enviando reporte con la ubicación:', selectedLocation);
      console.log(message);

      // Mostrar un mensaje con los datos obtenidos
      Alert.alert('Reporte enviado', message);
    } else {
      alert('Por favor selecciona una ubicación en el mapa.');
    }
  };


  return (
    <View style={{ flex: 1 }}>
      {location ? (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={handleMapPress} // Captura la selección en el mapa
        >
          {/* Marcador de la ubicación actual */}
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Ubicación actual"
            pinColor="blue" // Color para la ubicación actual
          />

          {/* Marcador de la ubicación seleccionada */}
          {selectedLocation && (
            <Marker
              coordinate={{
                latitude: selectedLocation.coords.latitude,
                longitude: selectedLocation.coords.longitude,
              }}
              title="Ubicación seleccionada"
              pinColor="red" // Color para la ubicación seleccionada
            />
          )}
        </MapView>
      ) : (
        <Text>Loading map...</Text>
      )}
      <View style={styles.buttonContent}>
        <TouchableOpacity style={styles.button}onPress={handleSendReport}>
          <Text style={styles.buttonText}>Ubicación seleccionada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={handleSendActualUbication}>
          <Text style={styles.buttonText}>Ubicación actual</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  buttonContent:{
    display: 'flex',
    flexDirection: 'row', 
    width:'100%',
    alignItems: 'center',
    marginTop:10,
    gap:3,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    height: 60,
    width: 180,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    height: 60,
    width: 180,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText:{
    color: 'white',
    justifyContent: 'center',
  }

});
