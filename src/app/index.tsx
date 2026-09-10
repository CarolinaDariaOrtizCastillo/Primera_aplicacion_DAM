import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username.trim() === 'Carolina' && password.trim() === 'CarolinaOrtiz') {
      setErrorMessage('');
      router.replace('/home');
    } else {
      setErrorMessage('Usuario o Contraseña incorrecta');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>🌸</Text>
        <Text style={styles.title}>LAVANDA</Text>

        <Text style={styles.label}>USUARIO</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Text style={styles.label}>CONTRASEÑA</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  logo: {
    fontSize: 50,
    marginBottom: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 20,
    letterSpacing: 2,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7B1FA2',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#CE93D8',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#FAFAFA',
  },
  errorText: {
    color: '#D32F2F',
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#8E24AA',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});