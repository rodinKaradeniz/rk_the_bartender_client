import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  Text,
  View,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import RecommendedCocktails from "../components/RecommendedCocktails";
import QuoteOfTheDay from "../components/QuoteOfTheDay";
import CocktailOfTheDay from "../components/CocktailOfTheDay";
import PreviousCocktails from "../components/PreviousCocktails";

const ios =
  Platform.OS == "ios"; /* For giving the app a margin-bottom if Android */

function HomeScreen() {
  const [recommendations, setRecommendations] = useState([1, 2, 3]);
  const [previousCocktails, setPreviousCocktails] = useState([1, 2, 3]);

  return (
    <View className="flex-1 bg-red-800">
      <SafeAreaView className={ios ? "-mb-2" : "-mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-xl font-bold">
            <Text style={styles.text}>R</Text>K the
            <Text style={styles.text}> B</Text>artender
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Quote of the day*/}
        <QuoteOfTheDay
          quote='"The world is a tragedy to those who feel, but a comedy to those who
        think."'
          from="Horace Walpole"
        />

        {/* Cocktail of the day */}
        <CocktailOfTheDay />

        {/* Cocktails carousel */}
        <RecommendedCocktails data={recommendations} />

        {/* Cocktails user searched for */}
        <PreviousCocktails data={previousCocktails} />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
