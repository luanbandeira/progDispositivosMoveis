import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/images/profile.png')}
        style={styles.image}
      />
      <Text style={styles.name}>Luan Bandeira de Melo</Text>
      <Text style={styles.bio}>
        Sou estudante e estou aprendendo desenvolvimento mobile com React Native e Expo.
        Bio criada para atividade da disciplina.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '90%',
    alignSelf: 'center',
    elevation: 3,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
});