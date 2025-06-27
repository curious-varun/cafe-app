import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Star, Clock } from 'lucide-react-native';
// import BackgroundPattern from '@/components/BackgroundPattern';
// import ModernRewardCard from '@/components/ModernRewardCard';

export default function HomeScreen() {
  const rewardPoints = 750;
  const nextRewardPoints = 250;
  const progress = 0.75;

  const recentOrders = [
    { id: 1, item: 'Double Espresso', time: '2 hours ago', price: '$4.50' },
    { id: 2, item: 'Cappuccino', time: 'Yesterday', price: '$5.25' },
  ];

  const featuredItems = [
    {
      id: 1,
      name: 'Signature Espresso',
      description: 'Rich, bold flavor with caramel notes',
      price: '$4.50',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'Artisan Cappuccino',
      description: 'Creamy foam art masterpiece',
      price: '$5.25',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <View style={styles.container}>
      {/* <BackgroundPattern /> */}
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.brandName}>NGOPISLURR</Text>
            <Text style={styles.tagline}>Discover the taste real of coffees</Text>
          </View>

          {/* Modern Reward Card */}
          {/* <ModernRewardCard */}
          {/*   points={rewardPoints} */}
          {/*   nextReward={nextRewardPoints} */}
          {/*   progress={progress} */}
          {/* /> */}

          {/* Recent Orders */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Orders</Text>
            {recentOrders.map((order) => (
              <View key={order.id} style={styles.orderCard}>
                <View style={styles.orderInfo}>
                  <Text style={styles.orderItem}>{order.item}</Text>
                  <View style={styles.orderMeta}>
                    <Clock size={14} color="#888" />
                    <Text style={styles.orderTime}>{order.time}</Text>
                  </View>
                </View>
                <Text style={styles.orderPrice}>{order.price}</Text>
              </View>
            ))}
          </View>

          {/* Featured Items */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Items</Text>
            {featuredItems.map((item) => (
              <TouchableOpacity key={item.id} style={styles.featuredCard}>
                <Image source={{ uri: item.image }} style={styles.featuredImage} />
                <View style={styles.featuredInfo}>
                  <Text style={styles.featuredName}>{item.name}</Text>
                  <Text style={styles.featuredDescription}>{item.description}</Text>
                  <View style={styles.featuredFooter}>
                    <Text style={styles.featuredPrice}>{item.price}</Text>
                    <View style={styles.rating}>
                      <Star size={16} color="#d2691e" fill="#d2691e" />
                      <Text style={styles.ratingText}>4.8</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Bottom spacing for floating tab bar */}
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  brandName: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#888',
    marginTop: 4,
  },
  section: {
    marginHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 16,
  },
  orderCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  orderInfo: {
    flex: 1,
  },
  orderItem: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#fff',
    marginBottom: 4,
  },
  orderMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderTime: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#888',
    marginLeft: 4,
  },
  orderPrice: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#d2691e',
  },
  featuredCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredInfo: {
    padding: 16,
  },
  featuredName: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 4,
  },
  featuredDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#888',
    marginBottom: 12,
  },
  featuredFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredPrice: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#d2691e',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#fff',
    marginLeft: 4,
  },
  bottomSpacing: {
    height: 120,
  },
});
