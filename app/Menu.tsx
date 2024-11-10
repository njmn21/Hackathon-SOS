// src/screens/Home.tsx
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Link } from 'expo-router';
// Importa RootStackParamList desde App.tsx




export default function Menu() {

    const [UserName, setUserName] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if(user && user.nombre) {
            setUserName(user.nombre);
        }
    } , []);


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
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground
                    source={require('@/assets/images/mp.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.overlay}></View>
                    <View style={styles.welcome}>
                        <Text style={styles.welcomeText}>BIENVENIDO {UserName.toUpperCase()}</Text>
                    </View>
                    {/* Botón SOS */}

                    <TouchableOpacity
                        style={styles.sosButton}
                        onPress={activateAlarm}
                    >
                        <Text style={styles.sosButtonText}>SOS</Text>
                    </TouchableOpacity>


                    {/* Grid Layout (Botones de menú) */}
                    <View style={styles.menuGrid}>
                        <TouchableOpacity
                            style={styles.menuButton}
                        //  onPress={() => navigation.navigate("ReportIncident")}
                        >
                            <Link href="/Reporte">
                            <View style={styles.stackLayout}>
                                <MaterialIcons name="report" size={60} color="red" />
                                <Text style={styles.menuButtonText}>Reportar</Text>
                                <Text style={styles.menuButtonSubText}>Incidente</Text>
                            </View>
                            </Link>
                            
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.menuButton}
                        //  onPress={() => navigation.navigate("EmergencyServices")}
                        >
                            <View style={styles.stackLayout}>
                                <MaterialIcons name="contact-emergency" size={55} color="blue" />
                                <Text style={styles.menuButtonText}>Servicios</Text>
                                <Text style={styles.menuButtonSubText}>Emergencia</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.menuButton}
                        //onPress={() => navigation.navigate("Notifications")}
                        >
                            <Link href="/RegistrarContactos">
                                <View style={styles.stackLayout}>
                                    <AntDesign name="contacts" size={60} color="purple" />
                                    <Text style={styles.menuButtonText}>Registrar</Text>
                                    <Text style={styles.menuButtonSubText}>Contactos</Text>

                                </View>
                            </Link>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.menuButton}>
                            <Link href="/ChatGlobal" >
                                <View style={styles.stackLayout}>
                                    <FontAwesome5 name="user-friends" size={60} color="green" />

                                    <Text style={styles.menuButtonText}>Comunidad</Text>

                                    <Text style={styles.menuButtonSubText}>Nuestra</Text>

                                </View>
                            </Link>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.menuButton}
                        // onPress={() => navigation.navigate("UserLocation")}
                        >
                            <Link href="/Ubication" >
                                <View style={styles.stackLayout}>
                                    <Entypo name="location-pin" size={60} color="orange" />

                                    <Text style={styles.menuButtonText}>Mi Ubicación</Text>
                                    <Text style={styles.menuButtonSubText}>de alerta</Text>
                                </View>
                            </Link>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.menuButton}
                        // onPress={showSecurityTips}
                        >
                            <View style={styles.stackLayout}>
                                <AntDesign name="checksquare" size={60} color="#d6d900" />
                                <Text style={styles.menuButtonText}>Consejos</Text>
                                <Text style={styles.menuButtonSubText}>informativos</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.footerButton}>
                            <Ionicons name="exit-outline" size={30} color="white" />
                            <Text style={styles.menuButtonExit}>Cerrar sesión</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        </ScrollView>
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
    welcome: {
        top: 100,
    },
    welcomeText: {
        color: 'white',
        fontSize: 40,
    },
    sosButton: {
        backgroundColor: '#05079d',
        padding: 20,
        marginTop: '40%',
        marginBottom: '10%',
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
        borderWidth: 5,
        borderColor: '#4fa8fb',

    },
    sosButtonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    footerButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuButtonExit: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10, // espacio entre el icono y el texto

    },
    menuGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },

    menuButton: {
        // estilos para el botón
        backgroundColor: 'white',
        width: '44%',
        height: 160,
        margin: 10,
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        shadowColor: '#000',
        elevation: 8,
    },
    stackLayout: {
        flexDirection: 'column', // apilar icono y textos verticalmente
        alignItems: 'center',
    },
    menuButtonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    menuButtonSubText: {
        fontSize: 14,
        color: 'grey',
    },
});


