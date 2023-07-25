import { View, Button, TextInput, StyleSheet } from "react-native";

export default function NewTodo({ handleTextInput, handleButtonAddPress }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="New Todo"
        onChangeText={handleTextInput}
      />
      <Button title="Add" onPress={handleButtonAddPress} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
