import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function PreviousCocktails({ data }) {
  let cocktailName = "Old Fashioned"; /* dummy var */
  const navigation = useNavigation();
  var { width, height } = Dimensions.get("window");

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">Cocktails you searched for</Text>
        <TouchableOpacity>
          <Text style={styles.text} className="text-lg">
            See All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Cocktail Row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate("Cocktail", item)}
            >
              <View className="space-y-1 mr-4">
                <Image
                  source={require("../assets/sampleCocktail2.jpg")}
                  className="rounded-3xl"
                  style={{ width: width * 0.33, height: height * 0.22 }}
                />
                <Text className="text-center text-neutral-300 ml-1">
                  {cocktailName.length > 14
                    ? cocktailName.slice(0, 14) + "..."
                    : cocktailName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
