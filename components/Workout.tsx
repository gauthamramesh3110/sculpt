import { WorkoutExerciseDetails } from "@/models/WorkoutDetails";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import ExerciseCard from "./ExerciseCard";

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
  };

  return (
    <BottomSheetView style={styles.container}>
      <DraggableFlatList
        data={exercises}
        onDragEnd={({ data }) => setExercises(data)}
        keyExtractor={(item: WorkoutExerciseDetails) => item.id}
        renderItem={({ item, drag, isActive }) => (
          <ExerciseCard
            key={item.id}
            exercise={item}
            onLongPressGrabber={drag}
            isActive={isActive}
          />
        )}
        contentContainerStyle={{
          alignItems: "stretch",
          padding: 12,
        }}
        ListFooterComponent={() => (
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
        )}
      ></DraggableFlatList>
    </BottomSheetView>
  );
};

export default Workout;
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FBF8FF",
  },
});
