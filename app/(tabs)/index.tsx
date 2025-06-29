import React, { useRef } from 'react';
import {
  Animated,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CategorySelector from '@/components/category-selector';


export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const cardTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -60],
    extrapolate: 'clamp',
  });

  const cardScale = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 1.04],
    extrapolate: 'clamp',
  });

  return (
    <Animated.ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
    >
      <View style={styles.header} className='bg-gradient-to-b from-[#111111] to-[#313131] '>
        {/* Greeting & Profile */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Morning Jude,</Text>
          <TouchableOpacity>
            <View style={styles.profileCircle} />
          </TouchableOpacity>
        </View>

        {/* Gradient Card with Parallax */}
        <Animated.View
          style={{
            transform: [{ translateY: cardTranslateY }, { scale: cardScale }],
            zIndex: 100,
          }}
        >
          <LinearGradient
            colors={['#A65634', '#B96A3F', '#C67C4E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientCard}
          >
            <View style={styles.cardTopRow}>
              <Text style={styles.cardNumber}>4342</Text>
              <View style={styles.flameContainer}>
                <Image
                  source={require("../../assets/images/star-line-white.png")}
                  style={styles.flameIcon}
                />
              </View>
            </View>

            <View style={styles.cardFooter}>
              {/* <Text */}
              <View className='flex-row gap-1'>
                <Text style={styles.footerText} className='text-white/60'>Points Earned:</Text>
                <Text style={styles.footerText}>3233</Text>
              </View>
              <View className='flex-row gap-1 bg-gradient-to-r from-gray-100/10 to-gray-50/10 px-2 rounded-full pb-0.5 items-center justify-center'>
                <Text style={styles.footerText} className='text-white/60'>Rewards Earned:</Text>
                <Text style={styles.footerText}>22</Text>
              </View>
            </View>
          </LinearGradient>
        </Animated.View>
      </View>
      <View style={{
        zIndex: -100,
        marginTop: 25,
        marginBottom: -35,
        marginHorizontal: 'auto',
      }} >
        <Text style={{
          fontSize: 18, fontFamily: 'visby-demibold'
        }}>
          Every Cup, A Little More
          <Text style={{ color: '#955D3B', fontFamily: "visby-extrabold" }}> Rewarding.</Text>
        </Text>
      </View>
      <CategorySelector />
    </Animated.ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },
  header: {
    height: 280,
    paddingTop: 60,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  greetingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  greetingText: {
    color: '#888',
    fontSize: 16,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#444',
    marginRight: 10,
  },
  gradientCard: {
    width: 350,
    height: 170,
    alignSelf: 'center',
    marginTop: 28,
    marginBottom: 20,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    shadowColor: "#C67C4E",
    shadowOpacity: 0.6,
    zIndex: 100,
    // shadowColor: "#FFFF",
    // shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 15,
    elevation: 8,
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  cardNumber: {
    color: 'white',
    fontSize: 48,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  flameContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flameIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  footerText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
  },
  footerSubText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
  },
});
