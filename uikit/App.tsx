import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [screen, setScreen] = useState<"form" | "profile">("form");

  const validateEmail = (value: string) => {
    setEmail(value);
    if (value && !value.includes("@")) {
      setEmailError("E-mail inválido");
    } else {
      setEmailError("");
    }
  };

  const bg = darkMode ? "bg-gray-900" : "bg-white";
  const card = darkMode ? "bg-gray-800" : "bg-gray-50";
  const text = darkMode ? "text-white" : "text-gray-900";
  const subtext = darkMode ? "text-gray-400" : "text-gray-500";
  const inputBg = darkMode ? "bg-gray-700" : "bg-white";
  const inputBorder = darkMode ? "border-gray-600" : "border-gray-300";
  const inputText = darkMode ? "text-white" : "text-gray-900";

  return (
    <SafeAreaProvider>
      <StatusBar style={darkMode ? "light" : "dark"} />
      <ScrollView className={`flex-1 ${bg}`}>
        <View className="flex-1 px-6 pt-14 pb-10">

          {screen === "form" ? (
            <>
              <Text className={`text-2xl font-bold mb-1 ${text}`}>Criar conta</Text>
              <Text className={`text-sm mb-6 ${subtext}`}>Preencha seus dados para continuar</Text>

              <Text className={`text-xs mb-1 ${subtext}`}>Nome completo</Text>
              <TextInput
                className={`border rounded-xl px-4 py-3 mb-4 ${inputBg} ${inputBorder} ${inputText}`}
                placeholder="Seu nome"
                placeholderTextColor={darkMode ? "#9ca3af" : "#9ca3af"}
                value={name}
                onChangeText={setName}
              />

              <Text className={`text-xs mb-1 ${subtext}`}>E-mail</Text>
              <TextInput
                className={`border rounded-xl px-4 py-3 ${inputBg} ${inputText} ${emailError ? "border-red-400" : inputBorder}`}
                placeholder="seu@email.com"
                placeholderTextColor="#9ca3af"
                value={email}
                onChangeText={validateEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {emailError ? (
                <Text className="text-red-400 text-xs mt-1 mb-3">{emailError}</Text>
              ) : (
                <View className="mb-4" />
              )}

              <Text className={`text-xs mb-1 ${subtext}`}>Senha</Text>
              <TextInput
                className={`border rounded-xl px-4 py-3 mb-6 ${inputBg} ${inputBorder} ${inputText}`}
                placeholder="••••••••"
                placeholderTextColor="#9ca3af"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <View className="flex-row items-center mb-6 gap-3">
                <Switch
                  value={accepted}
                  onValueChange={setAccepted}
                  trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
                  thumbColor="white"
                />
                <Text className={`text-sm ${subtext}`}>Aceito os termos de uso</Text>
              </View>

              <TouchableOpacity
                className={`rounded-xl py-4 items-center mb-3 ${accepted ? "bg-blue-500" : "bg-blue-300"}`}
                disabled={!accepted}
                onPress={() => setScreen("profile")}
              >
                <Text className="text-white font-semibold text-sm">Criar conta</Text>
              </TouchableOpacity>

              <TouchableOpacity className={`border rounded-xl py-4 items-center ${inputBorder}`}>
                <Text className={`text-sm ${subtext}`}>Já tenho conta</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View className={`rounded-2xl p-5 mb-6 ${card}`}>
                <View className="flex-row items-center gap-4 mb-4">
                  <View className="w-14 h-14 rounded-full bg-blue-100 items-center justify-center">
                    <Text className="text-blue-600 font-bold text-lg">AP</Text>
                  </View>
                  <View className="flex-1">
                    <Text className={`text-base font-semibold ${text}`}>{name || "Ana Paula"}</Text>
                    <Text className={`text-xs ${subtext}`}>{email || "ana@exemplo.com"}</Text>
                  </View>
                  <View className="bg-green-100 px-3 py-1 rounded-full">
                    <Text className="text-green-700 text-xs font-medium">Pro</Text>
                  </View>
                </View>
              </View>

              <Text className={`text-xs uppercase tracking-widest mb-3 ${subtext}`}>Preferências</Text>

              <View className={`rounded-2xl mb-6 overflow-hidden ${card}`}>
                <View className="flex-row items-center justify-between px-5 py-4">
                  <Text className={`text-sm ${text}`}>Notificações</Text>
                  <Switch
                    value={notifications}
                    onValueChange={setNotifications}
                    trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
                    thumbColor="white"
                  />
                </View>
                <View className={`h-px mx-5 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`} />
                <View className="flex-row items-center justify-between px-5 py-4">
                  <Text className={`text-sm ${text}`}>Modo escuro</Text>
                  <Switch
                    value={darkMode}
                    onValueChange={setDarkMode}
                    trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
                    thumbColor="white"
                  />
                </View>
              </View>

              <Text className={`text-xs uppercase tracking-widest mb-3 ${subtext}`}>Editar dados</Text>

              <Text className={`text-xs mb-1 ${subtext}`}>Telefone</Text>
              <TextInput
                className={`border rounded-xl px-4 py-3 mb-4 ${inputBg} ${inputBorder} ${inputText}`}
                placeholder="(81) 9 0000-0000"
                placeholderTextColor="#9ca3af"
                keyboardType="phone-pad"
              />

              <Text className={`text-xs mb-1 ${subtext}`}>Bio</Text>
              <TextInput
                className={`border rounded-xl  px-4 py-3 mb-6 ${inputBg} ${inputBorder} ${inputText}`}
                placeholder="Conte algo sobre você…"
                placeholderTextColor="#9ca3af"
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />

              <TouchableOpacity className="bg-blue-500 rounded-xl py-4 items-center mb-3">
                <Text className="text-white font-semibold text-sm">Salvar alterações</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`border rounded-xl py-4 items-center mb-6 ${inputBorder}`}
                onPress={() => setScreen("form")}
              >
                <Text className="text-red-400 text-sm">Voltar ao formulário</Text>
              </TouchableOpacity>
            </>
          )}

        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}