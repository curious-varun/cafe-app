import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

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
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      {/* Header Section */}
      <View
        style={{
          height: screenHeight * 0.4,
          paddingTop: 60,
          paddingHorizontal: 20,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          backgroundColor: '#2d2d2d',
        }}
      >
        {/* Status Bar Area */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 30,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#444',
              marginRight: 10,
            }} />
            <View>
              <Text style={{ color: '#888', fontSize: 14 }}>Morning Jude,</Text>
              <Text style={{ color: '#666', fontSize: 12 }}>Free Account</Text>
            </View>
          </View>
          <View style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: '#444',
          }} />
        </View>

        {/* Card Section */}
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <View
            style={{
              width: screenWidth * 0.85,
              height: 200,
              borderRadius: 20,
              padding: 20,
              justifyContent: 'space-between',
              backgroundColor: '#ff6b6b',
              shadowColor: '#ff6b6b',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.3,
              shadowRadius: 15,
              elevation: 8,
            }}
          >
            {/* Card Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{
                width: 30,
                height: 30,
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>V</Text>
              </View>
            </View>

            {/* Card Number */}
            <View style={{ marginTop: 30 }}>
              <Text style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '600',
                letterSpacing: 2,
              }}>
                2781 8191 6671 3190
              </Text>
            </View>

            {/* Card Footer */}
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
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 40,
        paddingVertical: 30,
        backgroundColor: '#000',
      }}>
        <TouchableOpacity style={{
          alignItems: 'center',
        }}>
          <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#333',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 8,
          }}>
            <Text style={{ color: '#ff6b6b', fontSize: 18 }}>+</Text>
          </View>
          <Text style={{ color: '#888', fontSize: 12 }}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          alignItems: 'center',
        }}>
          <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#333',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 8,
          }}>
            <Text style={{ color: '#ff6b6b', fontSize: 16 }}>↗</Text>
          </View>
          <Text style={{ color: '#888', fontSize: 12 }}>Send</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          alignItems: 'center',
        }}>
          <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#333',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 8,
          }}>
            <Text style={{ color: '#ff6b6b', fontSize: 16 }}>💳</Text>
          </View>
          <Text style={{ color: '#888', fontSize: 12 }}>Pay</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Transactions */}
      <View style={{
        paddingHorizontal: 20,
        backgroundColor: '#000',
        flex: 1,
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
            Recent Transaction
          </Text>
          <TouchableOpacity>
            <Text style={{ color: '#ff6b6b', fontSize: 14 }}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recentTransactions.map((transaction) => (
            <TouchableOpacity
              key={transaction.id}
              style={{
                alignItems: 'center',
                marginRight: 20,
              }}
            >
              <View style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#333',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 8,
              }}>
                <Text style={{ fontSize: 20 }}>{transaction.avatar}</Text>
              </View>
              <Text style={{ color: '#888', fontSize: 12 }}>
                {transaction.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Card Detail Section */}
        <View style={{ marginTop: 30 }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
              Card Detail
            </Text>
            <TouchableOpacity>
              <Text style={{ color: '#ff6b6b', fontSize: 14 }}>Show</Text>
            </TouchableOpacity>
          </View>

          <View style={{
            backgroundColor: '#1a1a1a',
            borderRadius: 15,
            padding: 20,
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}>
              <Text style={{ color: '#888', fontSize: 14 }}>Holder Name</Text>
              <Text style={{ color: 'white', fontSize: 14 }}>Jude Kyllan Jr.</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <Text style={{ color: '#888', fontSize: 14 }}>Card Number</Text>
              <Text style={{ color: 'white', fontSize: 14 }}>**** **** **** 3190</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={{
        paddingBottom: 40,
        paddingHorizontal: 12,
        backgroundColor: '#000',
      }}>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#1a1a1a',
          borderRadius: 50,
          paddingHorizontal: 2,
          marginBottom: 20,
          height: 56,
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#2d2d2d',
          shadowColor: '#000',
          shadowOffset: { width: 5, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 8,
        }}>
          {/* Home Tab - Active */}
          <TouchableOpacity style={{
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 2,
          }}>
            <View style={{
              flexDirection: 'row',
              flex: 1,
              minWidth: 112,
              minHeight: 48,
              marginTop: 16,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              backgroundColor: '#ff6b6b',
              gap: 8,
              paddingHorizontal: 16,
            }}>
              <View style={{
                width: 20,
                height: 20,
                backgroundColor: 'white',
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text style={{ color: '#ff6b6b', fontSize: 12, fontWeight: 'bold' }}>🏠</Text>
              </View>
              <Text style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'white'
              }}>
                Home
              </Text>
            </View>
          </TouchableOpacity>

          {/* Stats Tab - Inactive */}
          <TouchableOpacity style={{
            flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}>
            <View style={{
              width: 20,
              height: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{ color: '#666', fontSize: 16 }}>📊</Text>
            </View>
          </TouchableOpacity>

          {/* Messages Tab - Inactive */}
          <TouchableOpacity style={{
            flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}>
            <View style={{
              width: 20,
              height: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{ color: '#666', fontSize: 16 }}>💬</Text>
            </View>
          </TouchableOpacity>

          {/* Settings Tab - Inactive */}
          <TouchableOpacity style={{
            flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}>
            <View style={{
              width: 20,
              height: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{ color: '#666', fontSize: 16 }}>⚙️</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
