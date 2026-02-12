import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/constants/colors";

const SafeScreen = ({ children }) => {
  const inset = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: inset.top,
        paddingBottom: inset.bottom,
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      {children}
    </View>
  );
};

export default SafeScreen;
