import { StyleSheet, View } from 'react-native';
import Formulario from './src/components/Formulario';

export default function App() {
  return (
    <View style={styles.container}>
      <Formulario />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
