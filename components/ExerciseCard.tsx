import { WorkoutExerciseDetails } from "@/models/WorkoutDetails";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { ScaleDecorator } from "react-native-draggable-flatlist";

const ExerciseCard = ({
  exercise,
  onLongPressGrabber,
  isActive,
}: {
  exercise: WorkoutExerciseDetails;
  onLongPressGrabber: () => void;
  isActive: boolean;
}) => {
  return (
    <ScaleDecorator>
      <View
        style={{
          width: "100%",
          backgroundColor: isActive ? "#BABCE7" : "#E0E0FF",
          borderRadius: 12,
          padding: 12,
          marginBottom: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View style={{ overflow: "hidden", borderRadius: 12 }}>
            <Pressable
              android_ripple={{
                color: "#b9bbd1ff",
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                borderRadius: 12,
              }}
              onLongPress={onLongPressGrabber}
            >
              <Ionicons
                name="reorder-three-outline"
                size={24}
                color="#565992"
              />
            </Pressable>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#565992",
            }}
          >
            {exercise.name}
          </Text>
        </View>
        {/* Additional exercise details can be added here */}
      </View>
    </ScaleDecorator>
  );
};

export default ExerciseCard;
