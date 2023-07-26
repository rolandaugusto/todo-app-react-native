import { View, FlatList, Text, StyleSheet, Pressable } from "react-native";

export default function TodosList({ todos, handlePressed }) {
  return (
    <View style={styles.todosContainer}>
      <FlatList
        data={todos}
        renderItem={(itemData) => {
          return (
            <Pressable
              onPress={() => handlePressed(itemData.item.id)}
              style={({ pressed }) => [
                styles.todoWrapper,
                pressed && styles.pressedItem,
              ]}
            >
              <View>
                <Text style={styles.todoText}>{itemData.item.text}</Text>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
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
    marginBottom: 4,
    borderRadius: 45,
    backgroundColor: "#fff",
  },
  todoText: {
    color: "#000",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  pressedItem: {
    backgroundColor: "#ccc",
  },
});
