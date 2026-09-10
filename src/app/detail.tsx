import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';

const flowersData = [
  {
    nombre: 'Rosa',
    cientifico: 'Rosa gallica (o el género Rosa en general)',
    significado: 'Simboliza tradicionalmente el amor, la pasión y la belleza, aunque su mensaje cambia según el color (por ejemplo, las rojas expresan romance y las amarillas amistad).',
    imagen: 'https://media.admagazine.com/photos/651159b4503c330e0a09a982/1:1/w_2250,h_2250,c_limit/rosas-cuidados-significado.jpg',
  },
  {
    nombre: 'Girasol',
    cientifico: 'Helianthus annuus',
    significado: 'Representa la adoración, la lealtad y la longevidad, fuertemente asociado con la energía del sol, la felicidad y la vitalidad.',
    imagen: 'https://thumbs.dreamstime.com/b/girasol-en-luz-dorada-un-vibrante-se-erige-alto-campo-ba%C3%B1ado-por-el-c%C3%A1lido-resplandor-del-sol-los-p%C3%A9talos-amarillos-brillantes-391694105.jpg',
  },
  {
    nombre: 'Lirio de los valles',
    cientifico: 'Convallaria majalis',
    significado: 'Significa el retorno de la felicidad y la pureza; tradicionalmente se obsequia como un amuleto de buena suerte.',
    imagen: 'https://i.pinimg.com/474x/95/b6/b2/95b6b2c968ca4a9b9b7f5c99379338d7.jpg',
  },
  {
    nombre: 'Lavanda',
    cientifico: 'Lavandula angustifolia',
    significado: 'Expresa calma, serenidad y devoción, y a menudo se asocia con el silencio, la pureza espiritual y la paz interior.',
    imagen: 'https://ucarecdn.com/00a17c6e-e229-43f1-b9db-abc93f024b3e/-/format/auto/-/preview/3000x3000/-/quality/lighter/LAVANDA.jpg',
  },
  {
    nombre: 'Orquídea',
    cientifico: 'Orchidaceae (familia botánica)',
    significado: 'Es un símbolo de exotismo, belleza refinada y fuerza, frecuentemente vinculada con la admiración profunda y el respeto.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgE47i58pZhgG3eaytudg2m6j7PI6C9YvYQKYfTLoAA&s',
  },
  {
    nombre: 'Margarita',
    cientifico: 'Bellis perennis',
    significado: 'Simboliza la inocencia, la pureza y los nuevos comienzos, evocando la sencillez y el optimismo de la primavera.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU48HvyQ0hMjQAer0hh4u75X_Lpy5hBoOFxNaBGiRLtR1WWEdCrO9HBdCZ&s=10',
  },
];

export default function DetailScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header con botón para regresar */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backArrow}>⬅️</Text>
        </Pressable>
        <Text style={styles.smallLogo}>🌸</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Simbología de las Flores</Text>

        {flowersData.map((flower, index) => (
          <View key={index} style={styles.flowerCard}>
            {/* Contenedor Izquierdo: Información */}
            <View style={styles.textContainer}>
              <Text style={styles.flowerName}>{flower.nombre.toUpperCase()}</Text>
              <Text style={styles.scientificName}>{flower.cientifico}</Text>
              <Text style={styles.meaning}>{flower.significado}</Text>
            </View>

            {/* Contenedor Derecho: Imagen */}
            <Image
              source={{ uri: flower.imagen }}
              style={styles.flowerImage}
              resizeMode="cover"
            />
          </View>
        ))}
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
  },
  backButton: {
    marginRight: 15,
    padding: 5,
  },
  backArrow: {
    fontSize: 20,
  },
  smallLogo: {
    fontSize: 22,
  },
  scrollContent: {
    padding: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C',
    textAlign: 'center',
    marginBottom: 20,
  },
  flowerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 16,
    flexDirection: 'row', // Organiza el texto a la izquierda e imagen a la derecha
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: '#AB47BC',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: '#8E24AA',
  },
  textContainer: {
    flex: 1, // Toma todo el espacio disponible dejando espacio a la imagen
    paddingRight: 12,
  },
  flowerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 2,
  },
  scientificName: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#7B1FA2',
    marginBottom: 6,
  },
  meaning: {
    fontSize: 13,
    color: '#424242',
    lineHeight: 18,
  },
  flowerImage: {
    width: 95,
    height: 95,
    borderRadius: 12,
    backgroundColor: '#F3E5F5',
  },
});