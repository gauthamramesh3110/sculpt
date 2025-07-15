import exerciseList from "@/assets/json/exerciseList.json";
import Colors from "@/constants/Colors";
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
  useBottomSheetGestureHandlers,
} from "@gorhom/bottom-sheet";
import React from "react";
import { Pressable, Text, View } from "react-native";

const EXERCISE_LIST = exerciseList.exercises;

const ExerciseList = (props: {
  addNewExercise: (exerciseName: string) => void;
  ref: React.RefObject<BottomSheetModal | null>;
}) => {
  useBottomSheetGestureHandlers();

  return (
    <BottomSheetModal
      ref={props.ref}
      snapPoints={["70%"]}
      index={0}
      enableDynamicSizing={false}
      enableDismissOnClose={true}
      enablePanDownToClose={true}
      stackBehavior="push"
      backgroundStyle={{
        elevation: 12,
      }}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior="collapse"
        />
      )}
      handleStyle={{
        backgroundColor: Colors.background,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
    >
      <BottomSheetFlatList
        contentContainerStyle={{
          padding: 12,
          backgroundColor: Colors.background,
        }}
        keyExtractor={(item) => item.id}
        data={EXERCISE_LIST}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 12,
              borderRadius: 12,
              backgroundColor: Colors.secondaryLight,
              overflow: "hidden",
            }}
          >
            <Pressable
              onPress={() => {
                props.ref.current?.close();
                props.addNewExercise(item.name);
              }}
              android_ripple={{ color: Colors.secondaryDark }}
            >
              <View
                style={{
                  flexDirection: "column",
                  padding: 12,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: Colors.primary,
                    fontSize: 16,
                    marginBottom: 8,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: Colors.secondaryDark,
                    fontSize: 14,
                    fontWeight: "500",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Primary Targets
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {item.primaryMuscles.map((muscle) => (
                    <View
                      key={muscle}
                      style={{
                        marginRight: 8,
                        marginBottom: 4,
                        backgroundColor: Colors.secondaryDark,
                        padding: 4,
                        borderRadius: 4,
                      }}
                    >
                      <Text
                        style={{
                          color: Colors.primary,
                          fontSize: 12,
                          fontWeight: "500",
                          textTransform: "uppercase",
                        }}
                      >
                        {muscle}
                      </Text>
                    </View>
                  ))}
                </View>
                <Text
                  style={{
                    color: Colors.secondaryDark,
                    fontSize: 14,
                    fontWeight: "500",
                    textTransform: "uppercase",
                    marginBottom: 4,
                    marginTop: 8,
                  }}
                >
                  Secondary Targets
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {item.secondaryMuscles.map((muscle) => (
                    <View
                      key={muscle}
                      style={{
                        marginRight: 8,
                        marginBottom: 4,
                        backgroundColor: Colors.secondaryDark,
                        padding: 4,
                        borderRadius: 4,
                      }}
                    >
                      <Text
                        style={{
                          color: Colors.primary,
                          fontSize: 12,
                          fontWeight: "500",
                          textTransform: "uppercase",
                        }}
                      >
                        {muscle}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </Pressable>
          </View>
        )}
      ></BottomSheetFlatList>
    </BottomSheetModal>
  );
};

export default ExerciseList;
