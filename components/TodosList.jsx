import { View, FlatList, Text, StyleSheet, Pressable } from "react-native";

export default function TodosList({ todos, handlePressed }) {
  return (
    <View style={styles.todosContainer}>
      <FlatList
        data={todos}
        renderItem={(itemData) => {
          return (
            <View style={styles.todoWrapper}>
              <Pressable
                onPress={() => handlePressed(itemData.item.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
              >
                <Text style={styles.todoText}>{itemData.item.text}</Text>
              </Pressable>
            </View>
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
    borderRadius: 4,
  },
  todoText: {
    color: "#000",
    backgroundColor: "#e3f9f6",
    padding: 8,
  },
  pressedItem: {
    backgroundColor: "#fff",
  },
});
