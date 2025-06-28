import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';

const categories = ['All Coffee', 'Machiato', 'Latte', 'Americano', 'Espresso', 'Cappuccino'];

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
      </ScrollView>
    </View>
  );
}

