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
            <Text>{nome}</Text>

            <TextInput
                style={styles.input}
                placeholder="Curso:"
                value={curso}
                onChangeText={setCurso}
            />
            <Text>{curso}</Text>

            <TextInput
                style={styles.input}
                placeholder="Disciplina:"
                value={disciplina}
                onChangeText={setDisciplina}
            />
            <Text>{disciplina}</Text>

            <TextInput
                style={styles.input}
                placeholder="Descrição:"
                value={descricao}
                onChangeText={setDescricao}
            />
            <Text>{descricao}</Text>
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

});