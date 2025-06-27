import { Tabs } from 'expo-router';
import React from "react";
import { View, Text, Image, ImageSourcePropType } from 'react-native';

const images = {
  homeFilled: require('../../assets/images/home-filled.png'),
  homeLine: require('../../assets/images/home-line.png'),
  menuFilled: require('../../assets/images/menu-filled.png'),
  menuLine: require('../../assets/images/menu-line.png'),
  rewardFilled: require('../../assets/images/reward-filled.png'),
  rewardLine: require('../../assets/images/reward-line.png'),
  cartFilled: require('../../assets/images/cart-filled.png'),
  cartLine: require('../../assets/images/cart-line.png'),
};

type NavigationRoute = {
  name: string;
  filledImage: ImageSourcePropType;
  lineImage: ImageSourcePropType;
};

const navigationRoutes: NavigationRoute[] = [
  {
    name: "Home",
    filledImage: images.homeFilled,
    lineImage: images.homeLine
  },
  {
    name: "Menu",
    filledImage: images.menuFilled,
    lineImage: images.menuLine
  },
  {
    name: "Rewards",
    filledImage: images.rewardFilled,
    lineImage: images.rewardLine
  },
  {
    name: "Cart",
    filledImage: images.cartFilled,
    lineImage: images.cartLine
  }
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >

      {navigationRoutes.map((route) => (
        <Tabs.Screen
          key={route.name}
          name={route.name === "Home" ? "index" : route.name.toLowerCase()}
          options={{
            title: route.name,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View className="flex flex-row flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden gap-2 bg-gradient-to-r from-[#C67C4E] via-[rgba(198,124,78,0.7)] to-[rgba(198,124,78,0.4)]">
                  <Image
                    source={route.filledImage}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text className="text-base font-semibold text-white">{route.name}</Text>
                </View>
              ) : (
                <View className="flex flex-1 items-center justify-center mt-4">
                  <Image
                    source={route.lineImage}
                    style={{ width: 20, height: 20 }}
                  />
                </View>
              ),
          }}
        />
      ))}
    </Tabs >
  );
}

