import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text className="text-red-500">
        <View>
          <Image source={{ uri: "https://links.papareact.com/wru" }} />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
