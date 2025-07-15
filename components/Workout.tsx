import { WorkoutExerciseDetails } from "@/models/WorkoutDetails";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useRef, useState } from "react";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import ExerciseCard from "./ExerciseCard";
import ExerciseList from "./ExerciseList";
import TextButton from "./common/TextButton";

const Workout = ({ workoutId }: { workoutId: string }) => {
  const [exercises, setExercises] = useState<WorkoutExerciseDetails[]>([]);
  const exerciseListModalRef = useRef<BottomSheetModal>(null);
  const addNewExercise = (exerciseName: string) => {
    setExercises((prevExercises) => [
      ...prevExercises,
      {
        id: prevExercises.length.toString(),
        workoutId: workoutId,
        name: exerciseName,
        sets: [],
      },
    ]);
  };

  const openExerciseListModal = () => {
    exerciseListModalRef.current?.present();
  };

  const renderItem = useCallback(
    ({ item, drag, isActive }: RenderItemParams<WorkoutExerciseDetails>) => (
      <ExerciseCard
        exercise={item}
        onLongPressGrabber={drag}
        isActive={isActive}
      />
    ),
    []
  );

  const handleDragEnd = useCallback(
    ({ data }: { data: WorkoutExerciseDetails[] }) => {
      setExercises(data);
    },
    []
  );

  return (
    <>
      <ExerciseList
        addNewExercise={addNewExercise}
        ref={exerciseListModalRef}
      />
      <DraggableFlatList
        data={exercises}
        onDragEnd={handleDragEnd}
        keyExtractor={(item: WorkoutExerciseDetails) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          alignItems: "stretch",
          padding: 12,
        }}
        ListFooterComponent={() => (
          <TextButton
            label="ADD EXERCISE"
            iconName="add"
            onPress={openExerciseListModal}
          />
        )}
      ></DraggableFlatList>
    </>
  );
};

export default Workout;
