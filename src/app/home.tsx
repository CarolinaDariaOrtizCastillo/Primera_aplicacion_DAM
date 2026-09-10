import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.smallLogo}>🌸</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>LAVANDA</Text>

        {/* Tarjeta 1: ¡BIENVENIDO! */}
        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed,
          ]}
          onPress={() => {}}
        >
          <Text style={styles.cardTitle}>¡BIENVENIDO!</Text>
          <Text style={styles.cardText}>
            ¿Eres un amante de las flores?, llegaste al lugar correcto, aquí te enseñamos todo sobre ellas.
          </Text>
        </Pressable>

        {/* Tarjeta 2: SIMBOLOGÍA DE LAS FLORES */}
        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed,
          ]}
          onPress={() => router.push('/detail')}
        >
          <Text style={styles.cardTitle}>SIMBOLOGÍA DE LAS FLORES</Text>
          <Text style={styles.cardText}>
            ¿Quisieras descubrir cuáles son sus significados? Haz clic aquí y entérate del maravilloso simbolismo que cada una lleva consigo.
          </Text>
        </Pressable>

        {/* Tarjeta 3: TUTORIALES RÁPIDOS */}
        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed,
          ]}
          onPress={() => {}}
        >
          <Text style={styles.cardTitle}>TUTORIALES RÁPIDOS</Text>
          <Text style={styles.cardText}>
            ¿Cómo hacer arreglos florales? Claro, aquí puedes encontrar distintos tutoriales para distintas ocasiones.
          </Text>
        </Pressable>

        {/* Tarjeta 4: ARMA TU RAMO */}
        <Pressable
          style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed,
          ]}
          onPress={() => {}}
        >
          <Text style={styles.cardTitle}>ARMA TU RAMO</Text>
          <Text style={styles.cardText}>
            ¿Quieres regalarle un ramo a alguien? CUIDADO, tal vez las flores que le des a esa persona especial no están transmitiendo lo que tú realmente sientes por él/ella.
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F0FB',
  },
  header: {
    height: 50,
    backgroundColor: '#E1BEE7',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
  },
  smallLogo: {
    fontSize: 22,
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4A148C',
    marginBottom: 20,
    letterSpacing: 3,
  },
  /* Todas las tarjetas comparten exactamente el mismo estilo */
  card: {
    width: '100%',
    backgroundColor: '#F3E5F5',
    borderWidth: 1.5,
    borderColor: '#AB47BC',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#AB47BC',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  /* Efecto al presionar o hacer hover */
  cardPressed: {
    transform: [{ scale: 0.98 }],
    backgroundColor: '#E1BEE7',
    opacity: 0.9,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  cardText: {
    fontSize: 14,
    color: '#424242',
    lineHeight: 20,
  },
});