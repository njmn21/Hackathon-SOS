// src/screens/Home.tsx
import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
// Importa RootStackParamList desde App.tsx



export default function HomeScreen() {

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alerta Urbana</Text>   
      <TouchableOpacity
        style={styles.sosButton}
      >
            <Link href="/Menu" style={styles.button}>
            <Text style={styles.sosButtonText}>SOS</Text>
      </Link>  
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,  
  },

  backgroundImage: {
    flex: 1,
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute', // Permite que la capa se superponga sobre la imagen
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black', // El color de la capa es negro
    opacity: 0.64, // Ajusta la opacidad (0 es completamente transparente, 1 es completamente opaco)
  },
  sosButton: {
    backgroundColor: '#7f0000',
    padding: 20,
    borderRadius: 100,
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  sosButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  menuButton: {
    backgroundColor: '#bd0003',
    width:160,
    height:100,
    margin: 10,
    padding: 14,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 8,
  },
  stackLayout: {
    alignItems: 'center',
  },
  menuButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuButtonSubText: {
    fontSize: 12,
    color: '#fff',
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto',
    marginLeft: 20,
  },
});


