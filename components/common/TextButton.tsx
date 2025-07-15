import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const TextButton = (props: {
  label: string;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
  onPress: () => void;
}) => {
  return (
    <View
      style={{
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <Pressable
        onPress={props.onPress}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 48,
          paddingHorizontal: 12,
          borderRadius: 12,
        }}
        android_ripple={{
          color: Colors.secondaryDark,
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontWeight: "bold",
            fontSize: 16,
            marginRight: 6,
          }}
        >
          {props.label}
        </Text>
        {props.iconName != null ? (
          <Ionicons name={props.iconName} size={24} color={Colors.primary} />
        ) : (
          ""
        )}
      </Pressable>
    </View>
  );
};

export default TextButton;
