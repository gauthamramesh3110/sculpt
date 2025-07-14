import Colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useBottomSheet, useBottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const WorkoutHeader = () => {
  const { dismiss } = useBottomSheetModal();
  const [workoutName, setWorkoutName] = useState("");
  const insets = useSafeAreaInsets();
  const bottomSheetContext = useBottomSheet();

  const animatedStyle = useAnimatedStyle(() => {
    const paddingBottom = interpolate(
      bottomSheetContext.animatedIndex.value,
      [1, 0],
      [0, insets.bottom + 8]
    );
    return {
      paddingBottom,
    };
  });
  return (
    <View style={{ width: "100%" }}>
      <Animated.View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: Colors.secondaryLight,
            paddingHorizontal: 12,
            height: 72,
          },
          animatedStyle,
        ]}
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
              height: 48,
              paddingHorizontal: 12,
              borderRadius: 12,
              backgroundColor: Colors.secondaryDark,
            }}
            onPress={() => {}}
          >
            <Ionicons name="timer-outline" size={24} color={Colors.primary} />
            <Text
              style={{
                marginLeft: 6,
                color: Colors.primary,
                fontWeight: "bold",
              }}
            >
              01:15:03
            </Text>
          </Pressable>
        </View>
        <TextInput
          value={workoutName}
          autoCapitalize="characters"
          onChangeText={setWorkoutName}
          style={{
            flex: 1,
            height: 48,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: Colors.secondaryDark,
            marginHorizontal: 12,
            color: Colors.primary,
            fontWeight: "bold",
            textAlign: "center",
          }}
        ></TextInput>
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
              backgroundColor: Colors.secondaryDark,
            }}
            onPress={() => dismiss()}
          >
            <Ionicons name="close" size={24} color={Colors.primary} />
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
};

export default WorkoutHeader;
