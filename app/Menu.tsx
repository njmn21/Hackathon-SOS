// src/screens/Home.tsx
import React from 'react';
import {View, Text, TouchableOpacity, Alert,StyleSheet} from 'react-native';
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
            <View style={styles.stackLayout}>
                <Text style={styles.menuButtonText}>Reportarr</Text>
                <Text style={styles.menuButtonSubText}>Incidente</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
            style={styles.menuButton}
          //  onPress={() => navigation.navigate("EmergencyServices")}
        >
            <View style={styles.stackLayout}>
                <Text style={styles.menuButtonText}>Servicios</Text>
                <Text style={styles.menuButtonSubText}>Emergencia</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
            style={styles.menuButton}
           // onPress={() => navigation.navigate("Community")}
        >
            <View style={styles.stackLayout}>
                <Text style={styles.menuButtonText}>Comunidad</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
            style={styles.menuButton}
            //onPress={() => navigation.navigate("Notifications")}
        >
            <View style={styles.stackLayout}>
                <Text style={styles.menuButtonText}>Notificaciones</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.menuButton}
           // onPress={() => navigation.navigate("UserLocation")}
        >
            <View style={styles.stackLayout}>
                <Text style={styles.menuButtonText}>Mi Ubicación</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.menuButton}
           // onPress={showSecurityTips}
        >
            <View style={styles.stackLayout}>
                <Text style={styles.menuButtonText}>Consejos</Text>
            </View>
        </TouchableOpacity>
    </View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
},
sosButton: {
    backgroundColor: '#e63946',
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
    backgroundColor: '#2b8a3e',
    margin: 10,
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
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
});


