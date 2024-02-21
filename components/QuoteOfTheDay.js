import { View, Text } from "react-native";
import React from "react";

export default function QuoteOfTheDay({ quote, from }) {
  return (
    <View className="items-center mt-3 mb-5 ml-5 mr-5">
      <Text className="color-white text-center mb-2">{quote}</Text>
      <Text className="color-white">{from}</Text>
    </View>
  );
}
