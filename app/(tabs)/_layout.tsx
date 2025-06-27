import { Tabs } from 'expo-router';
import React from "react";
import { View, Text, Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View className="flex flex-row flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden gap-2 bg-gradient-to-r from-[#C67C4E] via-[rgba(198,124,78,0.7)] to-[rgba(198,124,78,0.4)]">
                <Image
                  source={require('../../assets/images/home-filled.png')}
                  style={{ width: 20, height: 20 }}
                />
                <Text className="text-base font-semibold text-white">Home</Text>
              </View>
            ) : (
              <View className="flex flex-1 items-center justify-center mt-4">
                <Image
                  source={require('../../assets/images/home-line.png')}
                  style={{ width: 20, height: 20 }}
                />
              </View>
            ),
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Checkout",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

