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
        tabBarItemStyle: {
          width: "100%",
          marginHorizontal: 2,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          // backgroundColor: '#2d2d2d',
          backgroundColor: '#ffff',
          borderRadius: 50,
          marginHorizontal: 12,
          paddingHorizontal: 2,
          marginBottom: 20,
          height: 56,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 2,
          // borderColor: "#2d2d2d",
          borderColor: "#ffff",
          //shadow 
          shadowColor: "#000",
          shadowOffset: { width: 5, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
        }
      }}
    >

      {
        navigationRoutes.map((route) => (
          <Tabs.Screen
            key={route.name}
            name={route.name === "Home" ? "index" : route.name.toLowerCase()}
            options={{
              title: route.name,
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <View className="flex flex-row flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden gap-2 bg-gradient-to-br from-[#C67C4E] via-[#C67C4E]/80 to-[#C67C4E]/50">
                    <Image
                      source={route.filledImage}
                      style={{ width: 20, height: 20 }}
                    />
                    <Text className="text-base font-semibold text-white">{route.name}</Text>
                  </View>
                ) : (
                  <View className="size-full items-center justify-center mt-4">
                    <Image
                      source={route.lineImage}
                      style={{ width: 20, height: 20 }}
                    />
                  </View>
                ),
            }}
          />
        ))
      }
    </Tabs >
  );
}

