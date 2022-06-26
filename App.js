import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  function startAddGoal() {
    setModalVisible(true);
  }
  function endAddGoal() {
    setModalVisible(false);
  }

  function addGoalHandler(enterText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enterText, id: Math.random().toString() },
    ]);
    endAddGoal();
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add new Goal" color="#5e0acc" onPress={startAddGoal} />

      <GoalInput
        visible={modalVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoal}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },

  goalsContainer: {
    paddingTop: 20,
  },
});
