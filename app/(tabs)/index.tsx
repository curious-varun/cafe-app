import { View, Text, Dimensions } from 'react-native';

const { height: screenHeight, width: ScreenWidth } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View>
      <View
        style={{
          height: screenHeight * 0.33,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 2,
          marginTop: -3,
        }}
        className='bg-gradient-to-b from-[#131313] to-[#313131]  rounded-b-xl'
      />
      <View
        style={{
          height: screenHeight * 0.15,
          width: ScreenWidth * 0.80,
          justifyContent: 'center',
          marginTop: -100,
          marginHorizontal: "auto",
          alignItems: 'center',
          borderRadius: 20,
        }}
        className='bg-red-300 '
      />
      <Text className='text-'>Arguments</Text>
    </View >
  );
}

