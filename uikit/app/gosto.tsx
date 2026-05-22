import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';

export default function GostoScreen() {
  const pan = Gesture.Pan()
    .onBegin(() => console.log('começou'))
    .onEnd(() => console.log('terminou'));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <Text style={styles.header}>Teste Gesture Handler</Text>
        <GestureDetector gesture={pan}>
          <View style={styles.card}>
            <Text>Arraste aqui</Text>
          </View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 150,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});