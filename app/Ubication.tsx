// src/screens/Home.tsx
import React, { useState, useEffect, useRef } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';


import { Link } from 'expo-router';
// Importa RootStackParamList desde App.tsx



export default function HomeScreen() {

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


