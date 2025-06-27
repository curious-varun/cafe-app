import { Tabs } from 'expo-router';
import { View, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { Chrome as Home, Menu, Gift, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 20,
          },
          android: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'rgba(26, 26, 26, 0.95)',
            borderTopWidth: 0,
            elevation: 20,
          },
          web: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'rgba(26, 26, 26, 0.95)',
            borderTopWidth: 0,
            backdropFilter: 'blur(20px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          },
        }),
        tabBarBackground: () => (
          Platform.OS === 'ios' ? (
            <BlurView
              intensity={100}
              style={StyleSheet.absoluteFill}
              tint="dark"
            />
          ) : (
            <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(26, 26, 26, 0.95)', borderRadius: 35 }]} />
          )
        ),
        tabBarActiveTintColor: '#d2691e',
        tabBarInactiveTintColor: '#666',
        tabBarLabelStyle: {
          fontFamily: 'Inter-Medium',
          fontSize: 11,
          marginTop: -5,
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <Home size={focused ? 24 : 20} color={color} />
              {focused && <View style={styles.activeIndicator} />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ size, color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <Menu size={focused ? 24 : 20} color={color} />
              {focused && <View style={styles.activeIndicator} />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: 'Rewards',
          tabBarIcon: ({ size, color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <Gift size={focused ? 24 : 20} color={color} />
              {focused && <View style={styles.activeIndicator} />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ size, color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <User size={focused ? 24 : 20} color={color} />
              {focused && <View style={styles.activeIndicator} />}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'relative',
  },
  iconContainerActive: {
    backgroundColor: 'rgba(210, 105, 30, 0.2)',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -8,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#d2691e',
  },
});
