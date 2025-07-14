import { BottomSheetHandle } from "@gorhom/bottom-sheet";
import React from "react";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WorkoutHeader from "./WorkoutHeader";

const BottomSheetCustomHandle = (props: {
  animatedIndex: SharedValue<number>;
  animatedPosition: SharedValue<number>;
}) => {
  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    const paddingTop = interpolate(
      props.animatedIndex.value,
      [0, 1],
      [8, insets.top + 8]
    );

    const topRadius = interpolate(props.animatedIndex.value, [0, 1], [12, 0]);
    return {
      paddingTop,
      backgroundColor: "#E0E0FF",
      borderTopLeftRadius: topRadius,
      borderTopRightRadius: topRadius,
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <BottomSheetHandle
        animatedIndex={props.animatedIndex}
        animatedPosition={props.animatedPosition}
      />
      <WorkoutHeader></WorkoutHeader>
    </Animated.View>
  );
};

export default BottomSheetCustomHandle;
