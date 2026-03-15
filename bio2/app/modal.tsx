import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function ModalScreen() {
  return (
    <View style={styles.overlay}>
      <View style={styles.modalBox}>
        <Text style={styles.title}>Mais sobre mim</Text>

        <Text style={styles.text}>
          Atualmente estou aprendendo desenvolvimento mobile com React Native e Expo,
          buscando entender como criar aplicativos funcionais e bem organizados.
        </Text>

        <Text style={styles.text}>
          Tenho interesse em tecnologia, interfaces simples e projetos práticos que
          possam ser usados em atividades acadêmicas e no dia a dia.
        </Text>

        <Text style={styles.text}>
          Este app foi desenvolvido como parte da disciplina Programação para
          Dispositivos Móveis.
        </Text>

        <Pressable style={styles.closeButton} onPress={() => router.back()}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalBox: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 22,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 14,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  closeButton: {
    marginTop: 8,
    backgroundColor: '#1f6feb',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});