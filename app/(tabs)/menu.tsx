import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function MenuScreen() {
  return (
    <SafeAreaView
      style={{
        paddingTop: 20,
        paddingHorizontal: 15,


      }}
    >
      <View className="flex-row  justify-between items-center">
        <View>
          <Text style={{
            fontSize: 30, lineHeight: 32, fontFamily: 'visby-extrabold'
          }}>
            <Text style={{ color: '#C67C4E' }} >What </Text>
            <Text style={{ color: '#6B7280' }}>would you{'\n'}</Text>
            <Text style={{ color: '#C67C4E' }}>like </Text>
            <Text style={{ color: '#6B7280' }}>to </Text>
            <Text style={{ color: '#C67C4E' }}>have?</Text>
          </Text>
        </View >
        <View>
          <Image source={require("../../assets/images/service-bell-mono.png")} style={{ height: 60, width: 60 }} />
        </View>
      </View>
    </SafeAreaView >
  );
}

