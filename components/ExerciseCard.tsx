import Colors from "@/constants/Colors";
import { WorkoutExerciseDetails } from "@/models/WorkoutDetails";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { ScaleDecorator } from "react-native-draggable-flatlist";
import TextButton from "./common/TextButton";

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
          backgroundColor: isActive
            ? Colors.secondaryLightTransparent
            : Colors.secondaryLight,
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
            marginBottom: 8,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              borderRadius: 12,
              marginRight: 12,
            }}
            onLongPress={onLongPressGrabber}
          >
            <Ionicons
              name="reorder-three-outline"
              size={24}
              color={Colors.primary}
            />
          </Pressable>

          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              textTransform: "uppercase",
              color: Colors.primary,
            }}
          >
            {exercise.id}
            {exercise.name}
          </Text>
        </View>
        <TextButton label="ADD SET" iconName="add" onPress={() => {}} />
      </View>
    </ScaleDecorator>
  );
};

export default React.memo(ExerciseCard);
