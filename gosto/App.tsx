import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Teste SDK 54</Text>
      <Text style={styles.sub}>App funcionando!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1a202c',
  },
  sub: {
    fontSize: 14,
    color: '#718096',
    marginTop: 8,
  },
});