import {
  View,
  StyleSheet,
  Modal,
  Image,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function inputGoalHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={style.gaolInput}>
        <Image
          style={style.img}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={style.textInput}
          placeholder="Your Course Goal"
          onChangeText={inputGoalHandler}
          value={enteredText}
        />
        <View style={style.buttonContainer}>
          <View style={style.button}>
            <Button title="Cancel" color="#f31282" onPress={props.onCancel} />
          </View>
          <View style={style.button}>
            <Button title="Add Goal" color="#b180f0" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  gaolInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  img: {
    height: 100,
    width: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 16,
  },
});

