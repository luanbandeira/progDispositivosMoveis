import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [accepted, setAccepted] = useState(false);

  const validateEmail = (value: string) => {
    setEmail(value);
    if (value && !value.includes('@')) {
      setEmailError('E-mail inválido');
    } else {
      setEmailError('');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar style="dark" />

      <Text style={styles.title}>Criar conta</Text>
      <Text style={styles.subtitle}>Preencha seus dados para continuar</Text>

      <Text style={styles.label}>Nome completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor="#9ca3af"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={[styles.input, emailError ? styles.inputError : null]}
        placeholder="seu@email.com"
        placeholderTextColor="#9ca3af"
        value={email}
        onChangeText={validateEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? (
        <Text style={styles.error}>{emailError}</Text>
      ) : (
        <View style={styles.errorSpacer} />
      )}

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="••••••••"
        placeholderTextColor="#9ca3af"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.checkboxRow}>
        <Switch
          value={accepted}
          onValueChange={setAccepted}
          trackColor={{ false: '#d1d5db', true: '#3b82f6' }}
          thumbColor="white"
        />
        <Text style={styles.checkboxLabel}>Aceito os termos de uso</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, !accepted && styles.buttonDisabled]}
        disabled={!accepted}
        onPress={() => router.push({ pathname: '/profile', params: { name, email } })}
      >
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline}>
        <Text style={styles.buttonOutlineText}>Já tenho conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 14,
    color: '#111827',
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#f87171',
    marginBottom: 4,
  },
  error: {
    color: '#f87171',
    fontSize: 12,
    marginBottom: 12,
  },
  errorSpacer: {
    marginBottom: 16,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  button: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonDisabled: {
    backgroundColor: '#93c5fd',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonOutlineText: {
    fontSize: 14,
    color: '#6b7280',
  },
});
