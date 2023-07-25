import { useState } from "react";
import { StyleSheet, View } from "react-native";
import uuid from "react-native-uuid";
import NewTodo from "./components/NewTodo";
import TodosList from "./components/TodosList";

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
      <NewTodo
        handleTextInput={handleTextInput}
        handleButtonAddPress={handleButtonAddPress}
      />
      <TodosList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 16,
    paddingTop: 48,
    flex: 1,
  },
});
