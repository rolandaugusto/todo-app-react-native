import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import uuid from "react-native-uuid";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleTextInput = (value) => {
    setInputText(value);
  };
  const handleButtonAddPress = () => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: inputText, key: uuid.v4() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="New Todo"
          onChangeText={handleTextInput}
        />
        <Button title="Add" onPress={handleButtonAddPress} />
      </View>
      <View style={styles.todosContainer}>
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            return (
              <View style={styles.todoWrapper}>
                <Text style={styles.todoText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 16,
    paddingTop: 48,
    flex: 1,
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 16,
    marginTop: 30,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    marginRight: 8,
    borderColor: "#ccc",
    padding: 8,
  },
  todosContainer: {
    flex: 4,
    marginBottom: 16,
  },
  todoWrapper: {
    borderRadius: 4,
    backgroundColor: "#eee",
    marginBottom: 4,
  },
  todoText: {
    color: "#222",
    padding: 8,
  },
});
