import React, { useState } from "react";
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

export default function Index() {
  const [idade, setIdade] = useState("");
  const [anoNascimento, setAnoNascimento] = useState<number | null>(null);

  const calcularAno = () => {
    Keyboard.dismiss();
    const anoAtual = new Date().getFullYear();
    const idadeNum = parseInt(idade);

    if (!isNaN(idadeNum) && idadeNum > 0) {
      setAnoNascimento(anoAtual - idadeNum);
    } else {
      setAnoNascimento(null);
    }
  };

  return (
    // O behavior "padding" é o padrão ideal para iOS, enquanto Android costuma lidar bem sem ele ou com "height"
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Calculadora de Nascimento</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite sua idade aqui..."
            keyboardType="numeric"
            value={idade}
            onChangeText={setIdade}
            onSubmitEditing={calcularAno}
          />

          <TouchableOpacity style={styles.botao} onPress={calcularAno}>
            <Text style={styles.textoBotao}>Calcular</Text>
          </TouchableOpacity>

          {anoNascimento !== null && (
            <View style={styles.resultadoContainer}>
              <Text style={styles.resultadoTexto}>Ano aproximado:</Text>
              <Text style={styles.ano}>{anoNascimento}</Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F7",
    padding: 20,
  },
  // ... (restante dos seus estilos permanecem iguais)
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1C1C1E",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#C7C7CC",
    marginBottom: 15,
    textAlign: "center",
  },
  botao: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textoBotao: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  resultadoContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  resultadoTexto: {
    fontSize: 16,
    color: "#8E8E93",
  },
  ano: {
    fontSize: 48,
    fontWeight: "900",
    color: "#007AFF",
  },
});