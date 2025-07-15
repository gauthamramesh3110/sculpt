import BottomSheetCustomHandle from "@/components/BottomSheetHandle";
import Workout from "@/components/Workout";
import Colors from "@/constants/Colors";
import { WorkoutDetails } from "@/models/WorkoutDetails";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [activeWorkout, setActiveWorkout] = useState<WorkoutDetails | null>(
    null
  );
  const insets = useSafeAreaInsets();

  const startNewWorkout = () => {
    setActiveWorkout({
      id: Math.random().toString(36).substring(7),
      name: "New Workout",
      exercises: [],
    });
    bottomSheetModalRef.current?.present();
  };
  return (
    <>
      <GestureHandlerRootView style={{ width: "100%", height: "100%" }}>
        <BottomSheetModalProvider>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              paddingHorizontal: 12,
              paddingBottom: insets.bottom + 12,
            }}
          >
            <View
              style={{ width: "100%", overflow: "hidden", borderRadius: 12 }}
            >
              <Pressable
                android_ripple={{
                  color: Colors.secondaryDark,
                }}
                style={{
                  alignItems: "center",
                  backgroundColor: Colors.primary,
                  padding: 16,
                }}
                onPress={startNewWorkout}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Text
                    style={{
                      color: Colors.secondaryLight,
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    START NEW WORKOUT
                  </Text>
                  <Ionicons
                    name="add"
                    size={24}
                    color={Colors.secondaryLight}
                  />
                </View>
              </Pressable>
            </View>
          </View>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={[104, "100%"]}
            index={1}
            enableDynamicSizing={false}
            enableDismissOnClose={true}
            enablePanDownToClose={false}
            backgroundStyle={{
              elevation: 12,
            }}
            backdropComponent={(props) => (
              <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={0}
                appearsOnIndex={1}
                pressBehavior="collapse"
              />
            )}
            handleComponent={(props) => <BottomSheetCustomHandle {...props} />}
          >
            <BottomSheetView style={styles.container}>
              {activeWorkout != null ? (
                <Workout workoutId={activeWorkout.id} />
              ) : (
                <Text>Workout not found</Text>
              )}
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.background,
  },
});
