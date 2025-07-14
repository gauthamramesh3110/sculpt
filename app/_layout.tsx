import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: Colors.background,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </>
  );
}
