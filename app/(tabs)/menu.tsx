import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, Dimensions } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header Section */}
      <View
        style={{
          height: screenHeight * 0.4,
          paddingTop: 60,
          paddingHorizontal: 20,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          backgroundColor: '#2d2d2d',
          marginHorizontal: 2,
        }}
      >
        {/* Greeting & Profile */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 30,
        }}>
          <View>
            <Text style={{ color: '#888', fontSize: 16 }}>Morning Jude,</Text>
          </View>
          <View style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#444',
            marginRight: 10,
          }} />
        </View>

        {/* Gradient Card */}
        <LinearGradient
          colors={['#A65634', '#B96A3F', '#C67C4E']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: screenWidth * 0.85,
            height: 180,
            marginHorizontal: "auto",
            marginTop: 25,
            borderRadius: 20,
            padding: 20,
            justifyContent: 'space-between',
            shadowColor: "#FFFF",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.3,
            shadowRadius: 15,
            elevation: 8,
          }}
        >
          {/* Card Number and Flame Icon */}
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: 12,
            paddingHorizontal: 20,
            paddingVertical: 16,
          }}>
            <Text style={{
              color: 'white',
              fontSize: 48,
              fontWeight: '700',
              letterSpacing: 1.5,
            }}>
              4342
            </Text>

            <View style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image
                source={require("../../assets/images/point.png")}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain'
                }}
              />
            </View>
          </View>
          {/* Card Footer Info */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 10,
          }}>
            <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>
              Jude Kyllan Jr.
            </Text>
            <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>
              Exp: 09/29
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

