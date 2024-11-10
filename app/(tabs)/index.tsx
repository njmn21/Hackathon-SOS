// src/screens/Home.tsx
import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
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
      <ImageBackground
        source={require('@/assets/images/mp.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}></View>

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
      
      </ImageBackground>
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
});


