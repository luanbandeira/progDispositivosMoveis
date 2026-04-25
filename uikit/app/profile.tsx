import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Profile() {
  const { name, email } = useLocalSearchParams<{ name: string; email: string }>();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');

  const c = darkMode
    ? {
        bg: '#111827',
        card: '#1f2937',
        text: '#f9fafb',
        subtext: '#9ca3af',
        inputBg: '#374151',
        inputBorder: '#4b5563',
        divider: '#374151',
      }
    : {
        bg: '#fff',
        card: '#f9fafb',
        text: '#111827',
        subtext: '#6b7280',
        inputBg: '#fff',
        inputBorder: '#d1d5db',
        divider: '#e5e7eb',
      };

  return (
    <ScrollView style={[styles.container, { backgroundColor: c.bg }]} contentContainerStyle={styles.content}>
      <StatusBar style={darkMode ? 'light' : 'dark'} />

      <View style={[styles.card, { backgroundColor: c.card }]}>
        <View style={styles.cardRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AP</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={[styles.cardName, { color: c.text }]}>{name || 'Ana Paula'}</Text>
            <Text style={[styles.cardEmail, { color: c.subtext }]}>{email || 'ana@exemplo.com'}</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Pro</Text>
          </View>
        </View>
      </View>

      <Text style={[styles.sectionLabel, { color: c.subtext }]}>PREFERÊNCIAS</Text>

      <View style={[styles.card, { backgroundColor: c.card }]}>
        <View style={styles.row}>
          <Text style={[styles.rowText, { color: c.text }]}>Notificações</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#d1d5db', true: '#3b82f6' }}
            thumbColor="white"
          />
        </View>
        <View style={[styles.divider, { backgroundColor: c.divider }]} />
        <View style={styles.row}>
          <Text style={[styles.rowText, { color: c.text }]}>Modo escuro</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#d1d5db', true: '#3b82f6' }}
            thumbColor="white"
          />
        </View>
      </View>

      <Text style={[styles.sectionLabel, { color: c.subtext }]}>EDITAR DADOS</Text>

      <Text style={[styles.label, { color: c.subtext }]}>Telefone</Text>
      <TextInput
        style={[styles.input, { backgroundColor: c.inputBg, borderColor: c.inputBorder, color: c.text }]}
        placeholder="(81) 9 0000-0000"
        placeholderTextColor="#9ca3af"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={[styles.label, { color: c.subtext }]}>Bio</Text>
      <TextInput
        style={[styles.input, styles.textArea, { backgroundColor: c.inputBg, borderColor: c.inputBorder, color: c.text }]}
        placeholder="Conte algo sobre você…"
        placeholderTextColor="#9ca3af"
        multiline
        numberOfLines={3}
        textAlignVertical="top"
        value={bio}
        onChangeText={setBio}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar alterações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonOutline, { borderColor: c.inputBorder }]}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonBack}>Voltar ao formulário</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 40,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardEmail: {
    fontSize: 12,
  },
  badge: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: {
    color: '#15803d',
    fontSize: 12,
    fontWeight: '500',
  },
  sectionLabel: {
    fontSize: 11,
    letterSpacing: 2,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  rowText: {
    fontSize: 14,
  },
  divider: {
    height: 1,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 14,
  },
  textArea: {
    height: 80,
  },
  button: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  buttonOutline: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonBack: {
    color: '#f87171',
    fontSize: 14,
  },
});
