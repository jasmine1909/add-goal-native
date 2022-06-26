import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const GoalInput = (props) => {
  const [enterText, setEnterText] = useState("");
  function goalInputHandler(enterText) {
    setEnterText(enterText);
  }

  function addGoalHandler() {
    props.onAddGoal(enterText);
    setEnterText("");
  }

  return (
    <>
      <StatusBar />
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/goal.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder=" Write your goal.."
            onChangeText={goalInputHandler}
            value={enterText}
          />
          <View style={styles.buttonContainer}>
            <Button title=" Add Goal" onPress={addGoalHandler} />
            <Button title="Cancel" onPress={props.onCancel} color="red" />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    paddingBottom: 30,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 10,
    borderRadius: 6,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});
