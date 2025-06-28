import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function HomeScreen() {
  const recentTransactions = [
    { id: 1, name: 'Thomas', avatar: '👨‍💼' },
    { id: 2, name: 'John', avatar: '👨‍🦱' },
    { id: 3, name: 'Antonio', avatar: '👨‍💻' },
    { id: 4, name: 'Peter', avatar: '👨‍🎓' },
    { id: 5, name: 'Cat', avatar: '🐱' },
  ];

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

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 30,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              {/* TODO:fetch name here  */}
              <Text style={{ color: '#888', fontSize: 16 }}>Morning Jude,</Text>
            </View>
          </View>
          {/* TODO: add profile route here & fetch account details */}
          <View style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#444',
            marginRight: 10,
          }} />
        </View>
        <LinearGradient
          // colors={['#C67C4E', '#C67C4E']}
          colors={['#A65634', '#B96A3F', '#C67C4E']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }} // bottom-right
          style={{
            width: screenWidth * 0.85,
            height: 180,
            marginHorizontal: "auto",
            marginTop: 25,
            borderRadius: 20,
            padding: 20,
            justifyContent: 'space-between',
            // shadowColor: "#C67C4E",
            shadowColor: "#FFFF",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.3,
            shadowRadius: 15,
            elevation: 8,
          }}
        >
          {/* Your card content here */}
          <View className='flex-row items-center justify-between bg-black/10 rounded-lg p-2 px-4 overflow-hidden '>
            {/* Card Number */}
            <View style={{ marginTop: 30 }}>
              <Text style={{
                color: 'white',
                fontSize: 50,
                fontWeight: '600',
                letterSpacing: 2,
                marginHorizontal: 2,
              }}>
                i2781
              </Text>
            </View>

            <View style={{
              width: 50,
              height: 50,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image
                source={require("../../assets/images/point.png")}
                style={{
                  margin: 5,
                  width: 50,
                  height: 50
                }}
              />
            </View>
          </View>


          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 20,
          }}>
            <View>
              <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>
                Jude Kyllan Jr.
              </Text>
            </View>
            <View>
              <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>
                Exp: 09/29
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View >
  );
}
