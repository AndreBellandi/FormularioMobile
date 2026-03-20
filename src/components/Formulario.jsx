import {useState} from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Formulario() {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [disciplina, setDisciplina] = useState('');
    const [descricao, setDescricao] = useState('');

    return (
        <SafeAreaView >
            <TextInput
                style={styles.input}
                placeholder="Nome:"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder="Curso:"
                value={curso}
                onChangeText={setCurso}
            />

            <TextInput
                style={styles.input}
                placeholder="Disciplina:"
                value={disciplina}
                onChangeText={setDisciplina}
            />

            <TextInput
                style={styles.inputDescricao}
                placeholder="Descrição:"
                value={descricao}
                numberOfLines={3}
                multiline
                onChangeText={setDescricao}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },

  input: {
    backgroundColor: '#b49ae8',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },

   inputDescricao: {
    backgroundColor: '#b49ae8',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
  }


});