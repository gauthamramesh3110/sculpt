import Workout from "@/components/Workout";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <>
      <SafeAreaView>
        <GestureHandlerRootView style={{ width: "100%", height: "100%" }}>
          <BottomSheetModalProvider>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                padding: 24,
              }}
            >
              <View
                style={{ width: "100%", overflow: "hidden", borderRadius: 12 }}
              >
                <Pressable
                  android_ripple={{
                    color: "#BABCE7",
                  }}
                  style={{
                    alignItems: "center",
                    backgroundColor: "#565992",
                    padding: 16,
                  }}
                  onPress={handlePresentModalPress}
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
                        color: "#E0E0FF",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      START NEW WORKOUT
                    </Text>
                    <Ionicons name="add" size={24} color="#E0E0FF" />
                  </View>
                </Pressable>
              </View>
            </View>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              snapPoints={["15%", "100%"]}
              index={1}
              enableDynamicSizing={false}
              enableDismissOnClose={true}
              enablePanDownToClose={false}
              backgroundStyle={{
                backgroundColor: "#FBF8FF",
                borderRadius: 0,
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
            >
              <BottomSheetView style={styles.contentContainer}>
                <Workout></Workout>
              </BottomSheetView>
            </BottomSheetModal>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
