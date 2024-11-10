// src/screens/Home.tsx
import React, { useState, useEffect, useRef } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Link } from 'expo-router';
// Importa RootStackParamList desde App.tsx



export default function HomeScreen() {
    const [grupoId, setGrupoId] = useState<number | null>(null);
    const [usuarioId, setUsuarioId] = useState<number | null>(null);

    useEffect(() => {
        const cargarDatos = async () => {
          try {
            const userDataString = await AsyncStorage.getItem('user');
            if (userDataString) {
              const userData = JSON.parse(userDataString);
              const grupoIdStorage = userData.id_group;
              const usuarioIdStorage = userData.id;
    
              if (grupoIdStorage && usuarioIdStorage) {
                setGrupoId(grupoIdStorage);
                setUsuarioId(usuarioIdStorage);
              }
            }
          } catch (error) {
            console.error("Error al cargar datos de AsyncStorage:", error);
          }
        };
    
        cargarDatos();
      }, []);

    const activateAlarm = () => {
        // Lógica para activar la alarma
    };
    const showSecurityTips = () => {
        Alert.alert(
            "Consejos de Seguridad",
            "• Mantén las puertas y ventanas cerradas\n• Conoce a tus vecinos\n• Ten a mano números de emergencia\n• Mantén iluminado el exterior de tu casa",
            [{ text: "Entendido" }]
        );
    };
    return (
        <View style={styles.container}>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    },

});


