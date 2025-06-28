import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text, View, Image } from 'react-native';

const categories = ['All', 'Snacks', 'cold drinks', 'coffee', 'pasta', 'fast bytes'];


export default function CategorySelector() {
  const [selected, setSelected] = useState('All Coffee');

  return (
    <View className="mt-16">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, alignItems: 'center' }}
      >
        {categories.map((category) => {
          const isSelected = selected === category;

          return (
            <TouchableOpacity
              key={category}
              onPress={() => setSelected(category)}
              className={`px-4 py-1.5 rounded-full mr-2 ${isSelected ? 'bg-[#E3E3E3]  ' : 'bg-[#E3E3E3]/30 text-black'
                }`}
            >
              <Text
                className={`text-base ${isSelected ? 'font-semibold' : 'text-[#222] font-medium'
                  }`}
              >
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
        <View className='w-4' />
      </ScrollView>


      {/* MENU ITEMS */}
      <View className='w-full mt-8 px-4 flex-row justify-between flex-wrap  '>
        <View className='bg-white h-[226px] w-[176px] rounded-[16px] mb-3'>
          <Image
            source={require("../assets/images/cold-coffee.png")}
            style={{
              height: 120,
              width: 148,
              marginHorizontal: "auto",
              marginTop: 10
            }}
          />
          <View className='mx-auto w-[140px] h-[82px]  mt-2'>
            <View className='w-[103px]  h-[42px]'>
              <Text className='font-semibold text-[18px]'> Cold Coffee</Text>
              <Text className='font-thin [10px] text-gray-400'> 23 points </Text>
            </View>

            <View className='mx-auto w-[140px] h-[32px] items-center justify-between flex-row'>
              <Text className='font-semibold text-[18px] -ml-0.5'> 232 $</Text>
              <TouchableOpacity className='h-[32px] w-[32px] bg-[#C67C4E] p-0  m-0 items-center justify-center rounded-[8px] text-white font-bold'>
                <Text className="text-[16px] text-white -mt-1.5">
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className='bg-white h-[226px] w-[176px] rounded-[16px] mb-3'>
          <Image
            source={require("../assets/images/cold-coffee.png")}
            style={{
              height: 120,
              width: 148,
              marginHorizontal: "auto",
              marginTop: 10
            }}
          />
          <View className='mx-auto w-[140px] h-[82px]  mt-2'>
            <View className='w-[103px]  h-[42px]'>
              <Text className='font-semibold text-[18px]'> Cold Coffee</Text>
              <Text className='font-thin [10px] text-gray-400'> 23 points </Text>
            </View>

            <View className='mx-auto w-[140px] h-[32px] items-center justify-between flex-row'>
              <Text className='font-semibold text-[18px] -ml-0.5'> 232 $</Text>
              <TouchableOpacity className='h-[32px] w-[32px] bg-[#C67C4E] p-0  m-0 items-center justify-center rounded-[8px] text-white font-bold'>
                <Text className="text-[16px] text-white -mt-1.5">
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className='bg-white h-[226px] w-[176px] rounded-[16px] mb-3'>
          <Image
            source={require("../assets/images/cold-coffee.png")}
            style={{
              height: 120,
              width: 148,
              marginHorizontal: "auto",
              marginTop: 10
            }}
          />
          <View className='mx-auto w-[140px] h-[82px]  mt-2'>
            <View className='w-[103px]  h-[42px]'>
              <Text className='font-semibold text-[18px]'> Cold Coffee</Text>
              <Text className='font-thin [10px] text-gray-400'> 23 points </Text>
            </View>

            <View className='mx-auto w-[140px] h-[32px] items-center justify-between flex-row'>
              <Text className='font-semibold text-[18px] -ml-0.5'> 232 $</Text>
              <TouchableOpacity className='h-[32px] w-[32px] bg-[#C67C4E] p-0  m-0 items-center justify-center rounded-[8px] text-white font-bold'>
                <Text className="text-[16px] text-white -mt-1.5">
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className='bg-white h-[226px] w-[176px] rounded-[16px] mb-3'>
          <Image
            source={require("../assets/images/cold-coffee.png")}
            style={{
              height: 120,
              width: 148,
              marginHorizontal: "auto",
              marginTop: 10
            }}
          />
          <View className='mx-auto w-[140px] h-[82px]  mt-2'>
            <View className='w-[103px]  h-[42px]'>
              <Text className='font-semibold text-[18px]'> Cold Coffee</Text>
              <Text className='font-thin [10px] text-gray-400'> 23 points </Text>
            </View>

            <View className='mx-auto w-[140px] h-[32px] items-center justify-between flex-row'>
              <Text className='font-semibold text-[18px] -ml-0.5'> 232 $</Text>
              <TouchableOpacity className='h-[32px] w-[32px] bg-[#C67C4E] p-0  m-0 items-center justify-center rounded-[8px] text-white font-bold'>
                <Text className="text-[16px] text-white -mt-1.5">
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className='bg-white h-[226px] w-[176px] rounded-[16px] shadow-lg'>
          <Image
            source={require("../assets/images/cold-coffee.png")}
            style={{
              height: 120,
              width: 148,
              marginHorizontal: "auto",
              marginTop: 10
            }}
          />
          <View className='mx-auto w-[140px] h-[82px]  mt-2'>
            <View className='w-[103px]  h-[42px]'>
              <Text className='font-semibold text-[18px]'> Cold Coffee</Text>
              <Text className='font-thin [10px] text-gray-400'> 23 points </Text>
            </View>

            <View className='mx-auto w-[140px] h-[32px] items-center justify-between flex-row'>
              <Text className='font-semibold text-[18px] -ml-0.5'> 232 $</Text>
              <TouchableOpacity className='h-[32px] w-[32px] bg-[#C67C4E] p-0  m-0 items-center justify-center rounded-[8px] text-white font-bold'>
                <Text className="text-[16px] text-white -mt-1.5">
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className='bg-white h-[226px] w-[176px] rounded-[16px] shadow-lg'>
          <Image
            source={require("../assets/images/cold-coffee.png")}
            style={{
              height: 120,
              width: 148,
              marginHorizontal: "auto",
              marginTop: 10
            }}
          />
          <View className='mx-auto w-[140px] h-[82px]  mt-2'>
            <View className='w-[103px]  h-[42px]'>
              <Text className='font-semibold text-[18px]'> Cold Coffee</Text>
              <Text className='font-thin [10px] text-gray-400'> 23 points </Text>
            </View>

            <View className='mx-auto w-[140px] h-[32px] items-center justify-between flex-row'>
              <Text className='font-semibold text-[18px] -ml-0.5'> 232 $</Text>
              <TouchableOpacity className='h-[32px] w-[32px] bg-[#C67C4E] p-0  m-0 items-center justify-center rounded-[8px] text-white font-bold'>
                <Text className="text-[16px] text-white -mt-1.5">
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View >
  );
}

