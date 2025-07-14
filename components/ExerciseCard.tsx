import Colors from "@/constants/Colors";
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
          backgroundColor: isActive ? Colors.secondaryDark : Colors.secondaryLight,
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
                color: Colors.splash,
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
                color={Colors.primary}
              />
            </Pressable>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              textTransform: "uppercase",
              color: Colors.primary,
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
