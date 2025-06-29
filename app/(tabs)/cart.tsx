import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CategorySelector from '@/components/category-selector';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header} className='bg-gradient-to-b from-[#111111] to-[#313131] '>
        {/* Greeting & Profile */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Morning Jude,</Text>
          <TouchableOpacity>
            <View style={styles.profileCircle} />
          </TouchableOpacity>
        </View>

        {/* Gradient Card */}
        <LinearGradient
          colors={['#A65634', '#B96A3F', '#C67C4E']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientCard}
        >
          {/* Card Number and Flame Icon */}
          <View style={styles.cardTopRow}>
            <Text style={styles.cardNumber}>4342</Text>
            <View style={styles.flameContainer}>
              <Image
                source={require("../../assets/images/point.png")}
                style={styles.flameIcon}
              />
            </View>
          </View>

          {/* Card Footer Info */}
          <View style={styles.cardFooter}>
            <Text style={styles.footerText}>Jude Kyllan Jr.</Text>
            <Text style={styles.footerSubText}>Exp: 09/29</Text>
          </View>
        </LinearGradient>
      </View>

      <CategorySelector />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
    // backgroundColor: 'white'
  },
  header: {
    height: screenHeight * 0.4,
    paddingTop: 60,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // backgroundColor: '#2d2d2d',
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
    width: screenWidth * 0.85,
    height: 170,
    alignSelf: 'center',
    marginTop: 55,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    shadowColor: "#FFFF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.1)',
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

