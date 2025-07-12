import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Workout = () => {
  const { dismiss, dismissAll } = useBottomSheetModal();
  const [workoutName, setWorkoutName] = useState("");
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#E0E0FF",
          paddingHorizontal: 24,
          height: 72,
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
              height: 48,
              paddingHorizontal: 12,
              borderRadius: 12,
              backgroundColor: "#BABCE7",
            }}
            onPress={() => {}}
          >
            <Ionicons name="timer-outline" size={24} color="#565992" />
            <Text
              style={{ marginLeft: 6, color: "#565992", fontWeight: "bold" }}
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
            borderColor: "#BABCE7",
            marginHorizontal: 12,
            color: "#565992",
            fontWeight: "bold",
            textAlign: "center",
          }}
        ></TextInput>
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
              backgroundColor: "#BABCE7",
            }}
            onPress={() => dismiss()}
          >
            <Ionicons name="close" size={24} color="#565992" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({});
