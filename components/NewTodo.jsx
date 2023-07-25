import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

export default function NewTodo({
  text,
  showModal,
  hideModal,
  handleTextInput,
  handleButtonAddPress,
}) {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/todo_check.png")}
        />
        <TextInput
          value={text}
          style={styles.textInput}
          placeholder="New Todo"
          onChangeText={handleTextInput}
        />
        <View style={styles.actions}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={hideModal} color="#de1f4a" />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={handleButtonAddPress} color="white" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#34d19e",
  },
  image: {
    width: 95,
    height: 70,
    marginBottom: 32,
  },
  textInput: {
    borderWidth: 1.5,
    width: "100%",
    backgroundColor: "#eee",
    borderColor: "#125abe",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  button: {
    width: "50%",
    marginHorizontal: 8,
    flex: 1,
  },
});
