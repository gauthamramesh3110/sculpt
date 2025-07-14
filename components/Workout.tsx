import { WorkoutExerciseDetails } from "@/models/WorkoutDetails";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Workout = ({ workoutId }: { workoutId: string }) => {
  const [exercises, setExercises] = useState<WorkoutExerciseDetails[]>([]);

  const addNewExercise = () => {
    setExercises((prevExercises) => [
      ...prevExercises,
      {
        id: Math.random().toString(36).substring(7),
        workoutId: workoutId,
        name: "New Exercise",
        sets: [],
      },
    ]);

    console.log("Exercise added:", exercises);
  };

  return (
    <BottomSheetScrollView
      style={styles.contentContainer}
      contentContainerStyle={{
        alignItems: "center",
        padding: 12,
      }}
    >
      {exercises.map((exercise) => (
        <View
          key={exercise.id}
          style={{
            width: "100%",
            backgroundColor: "#E0E0FF",
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {exercise.name}
          </Text>
          {/* Additional exercise details can be added here */}
        </View>
      ))}
      <View
        style={{
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <Pressable
          onPress={addNewExercise}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 48,
            paddingHorizontal: 12,
            borderRadius: 12,
          }}
          android_ripple={{
            color: "#BABCE7",
          }}
        >
          <Text
            style={{
              color: "#565992",
              fontWeight: "bold",
              fontSize: 16,
              marginRight: 6,
            }}
          >
            ADD EXERCISE
          </Text>
          <Ionicons name="add" size={24} color="#565992" />
        </Pressable>
      </View>
    </BottomSheetScrollView>
  );
};

export default Workout;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    backgroundColor: "#FBF8FF",
  },
});
