import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Workout = () => {
  const {dismiss, dismissAll} =  useBottomSheetModal();
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text>Workout</Text>
        <Pressable onPress={() => dismiss()}>
          <Ionicons
            name="close"
            size={24}
            color="#565992"
            style={{ marginLeft: 8 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({});
