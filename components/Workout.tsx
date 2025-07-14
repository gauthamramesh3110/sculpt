import exerciseList from "@/assets/json/exerciseList.json";
import colors from "@/constants/Colors";
import { WorkoutExerciseDetails } from "@/models/WorkoutDetails";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import ExerciseCard from "./ExerciseCard";

const EXERCISE_LIST = exerciseList.exercises;

const Workout = ({ workoutId }: { workoutId: string }) => {
  const [exercises, setExercises] = useState<WorkoutExerciseDetails[]>([]);

  const addNewExercise = (exerciseId: string, exerciseName: string) => {
    exerciseListModalRef.current?.close();
    setExercises((prevExercises) => [
      ...prevExercises,
      {
        id: exerciseId,
        workoutId: workoutId,
        name: exerciseName,
        sets: [],
      },
    ]);
  };

  const openExerciseListModal = () => {
    exerciseListModalRef.current?.present();
  };

  const exerciseListModalRef = useRef<BottomSheetModal>(null);

  return (
    <BottomSheetView style={styles.container}>
      <BottomSheetModal
        ref={exerciseListModalRef}
        snapPoints={["70%"]}
        index={0}
        enableDynamicSizing={false}
        enableDismissOnClose={true}
        enablePanDownToClose={true}
        stackBehavior="push"
        backgroundStyle={{
          elevation: 12,
        }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            pressBehavior="collapse"
          />
        )}
        handleStyle={{
          backgroundColor: colors.background,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      >
        <BottomSheetFlatList
          contentContainerStyle={{
            padding: 12,
            backgroundColor: colors.background,
          }}
          keyExtractor={(item) => item.id}
          data={EXERCISE_LIST}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 12,
                borderRadius: 12,
                backgroundColor: colors.secondaryLight,
                overflow: "hidden",
              }}
            >
              <Pressable
                onPress={() => {
                  addNewExercise(item.id, item.name);
                }}
                android_ripple={{ color: colors.secondaryDark }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    padding: 12,
                    borderRadius: 12,
                  }}
                >
                  <Text
                    style={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: colors.primary,
                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: colors.secondaryDark,
                      fontSize: 14,
                      fontWeight: "500",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Primary Targets
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {item.primaryMuscles.map((muscle) => (
                      <View
                        key={muscle}
                        style={{
                          marginRight: 8,
                          marginBottom: 4,
                          backgroundColor: colors.secondaryDark,
                          padding: 4,
                          borderRadius: 4,
                        }}
                      >
                        <Text
                          style={{
                            color: colors.primary,
                            fontSize: 12,
                            fontWeight: "500",
                            textTransform: "uppercase",
                          }}
                        >
                          {muscle}
                        </Text>
                      </View>
                    ))}
                  </View>
                  <Text
                    style={{
                      color: colors.secondaryDark,
                      fontSize: 14,
                      fontWeight: "500",
                      textTransform: "uppercase",
                      marginBottom: 4,
                      marginTop: 8,
                    }}
                  >
                    Secondary Targets
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {item.secondaryMuscles.map((muscle) => (
                      <View
                        key={muscle}
                        style={{
                          marginRight: 8,
                          marginBottom: 4,
                          backgroundColor: colors.secondaryDark,
                          padding: 4,
                          borderRadius: 4,
                        }}
                      >
                        <Text
                          style={{
                            color: colors.primary,
                            fontSize: 12,
                            fontWeight: "500",
                            textTransform: "uppercase",
                          }}
                        >
                          {muscle}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </Pressable>
            </View>
          )}
        ></BottomSheetFlatList>
      </BottomSheetModal>
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
              onPress={openExerciseListModal}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: 48,
                paddingHorizontal: 12,
                borderRadius: 12,
              }}
              android_ripple={{
                color: Colors.secondaryDark,
              }}
            >
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: "bold",
                  fontSize: 16,
                  marginRight: 6,
                }}
              >
                ADD EXERCISE
              </Text>
              <Ionicons name="add" size={24} color={colors.primary} />
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
    backgroundColor: {Colors.background,
  },
});
