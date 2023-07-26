import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import uuid from "react-native-uuid";
import NewTodo from "./components/NewTodo";
import TodosList from "./components/TodosList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTextInput = (value) => {
    setInputText(value);
  };
  const handleButtonAddPress = () => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: inputText, id: uuid.v4() },
    ]);
    setInputText("");
    setIsModalVisible(false);
  };
  const handlePressed = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  const openAddTodoModal = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.addButton}>
        <Button title="Add New ToDo" onPress={openAddTodoModal} color="#fff" />
      </View>
      <NewTodo
        showModal={isModalVisible}
        hideModal={() => setIsModalVisible(false)}
        text={inputText}
        handleTextInput={handleTextInput}
        handleButtonAddPress={handleButtonAddPress}
      />

      <TodosList todos={todos} handlePressed={handlePressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 16,
    paddingTop: 48,
    flex: 1,
  },
  addButton: {
    marginBottom: 16,
    marginTop: 30,
  },
});
