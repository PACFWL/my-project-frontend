import { StyleSheet, View, Text, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MovieScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Profile Screen</ThemedText>
      <Text style={styles.text}>
        Bem-vindo à tela de Perfil! Aqui você pode personalizar suas informações.
      </Text>
      <Button title="Editar Perfil" onPress={() => alert('Editar Perfil')} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
});
