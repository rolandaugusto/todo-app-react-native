import { View, FlatList, Text, StyleSheet } from "react-native";

export default function TodosList({ todos }) {
  return (
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
  );
}

const styles = StyleSheet.create({
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
