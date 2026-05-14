import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../Components/UI/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../Components/UI/Title";
import Card from "../Components/UI/Card";
import InstructionText from "../Components/UI/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 90) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "ok", style: "destructive", onPress: resetInputHandler }],
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={style.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={style.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={style.buttonsContainer}>
          <View style={style.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={style.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;

