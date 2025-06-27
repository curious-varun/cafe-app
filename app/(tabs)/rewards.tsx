import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Gift, Star, Coffee, Percent, Award } from 'lucide-react-native';
// import BackgroundPattern from '@/components/BackgroundPattern';

export default function RewardsScreen() {
  const currentPoints = 750;

  const rewards = [
    {
      id: 1,
      title: 'Free Muffin',
      description: 'Any muffin from our bakery selection',
      points: 100,
      icon: <Coffee size={24} color="#d2691e" />,
      available: true,
    },
    {
      id: 2,
      title: '10% Off Any Drink',
      description: 'Valid on all beverages',
      points: 250,
      icon: <Percent size={24} color="#d2691e" />,
      available: true,
    },
    {
      id: 3,
      title: 'Free Coffee Upgrade',
      description: 'Upgrade any coffee to premium blend',
      points: 300,
      icon: <Star size={24} color="#d2691e" />,
      available: true,
    },
    {
      id: 4,
      title: '20% Off Orders $10+',
      description: 'Maximum discount $15',
      points: 500,
      icon: <Percent size={24} color="#d2691e" />,
      available: true,
    },
    {
      id: 5,
      title: 'Free Specialty Drink',
      description: 'Any drink from our signature collection',
      points: 750,
      icon: <Coffee size={24} color="#d2691e" />,
      available: true,
    },
    {
      id: 6,
      title: '25% Off Orders $15+',
      description: 'Maximum discount $20',
      points: 1000,
      icon: <Percent size={24} color="#d2691e" />,
      available: false,
    },
    {
      id: 7,
      title: 'VIP Experience Day',
      description: 'Skip lines + free pastry + premium coffee',
      points: 1500,
      icon: <Award size={24} color="#d2691e" />,
      available: false,
    },
  ];

  const earnMethods = [
    { action: 'Purchase any drink', points: '+10 points' },
    { action: 'Purchase pastry', points: '+5 points' },
    { action: 'Visit 5 days in a row', points: '+50 points' },
    { action: 'Refer a friend', points: '+100 points' },
  ];

  return (
    <View style={styles.container}>
      {/* <BackgroundPattern /> */}
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Rewards</Text>
            <Text style={styles.subtitle}>Earn points, unlock exclusive rewards</Text>
          </View>

          {/* Points Balance */}
          <View style={styles.balanceCard}>
            <View style={styles.balanceHeader}>
              <Gift size={28} color="#d2691e" />
              <Text style={styles.balanceTitle}>Your Balance</Text>
            </View>
            <Text style={styles.balancePoints}>{currentPoints}</Text>
            <Text style={styles.balanceLabel}>Points Available</Text>
          </View>

          {/* Available Rewards */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Available Rewards</Text>
            {rewards.map((reward) => (
              <TouchableOpacity
                key={reward.id}
                style={[
                  styles.rewardCard,
                  !reward.available && styles.rewardCardDisabled
                ]}
                disabled={!reward.available || currentPoints < reward.points}
              >
                <View style={styles.rewardIcon}>
                  {reward.icon}
                </View>
                <View style={styles.rewardInfo}>
                  <Text style={[
                    styles.rewardTitle,
                    !reward.available && styles.rewardTitleDisabled
                  ]}>
                    {reward.title}
                  </Text>
                  <Text style={[
                    styles.rewardDescription,
                    !reward.available && styles.rewardDescriptionDisabled
                  ]}>
                    {reward.description}
                  </Text>
                  <Text style={[
                    styles.rewardPoints,
                    !reward.available && styles.rewardPointsDisabled
                  ]}>
                    {reward.points} points
                  </Text>
                </View>
                <View style={[
                  styles.redeemButton,
                  (!reward.available || currentPoints < reward.points) && styles.redeemButtonDisabled
                ]}>
                  <Text style={[
                    styles.redeemButtonText,
                    (!reward.available || currentPoints < reward.points) && styles.redeemButtonTextDisabled
                  ]}>
                    {currentPoints >= reward.points ? 'Redeem' : 'Locked'}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* How to Earn Points */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>How to Earn Points</Text>
            <View style={styles.earnCard}>
              {earnMethods.map((method, index) => (
                <View key={index} style={styles.earnItem}>
                  <Text style={styles.earnAction}>{method.action}</Text>
                  <Text style={styles.earnPoints}>{method.points}</Text>
                </View>
              ))}
            </View>
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
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#888',
  },
  balanceCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    margin: 24,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  balanceTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginLeft: 8,
  },
  balancePoints: {
    fontSize: 48,
    fontFamily: 'Inter-Bold',
    color: '#d2691e',
  },
  balanceLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#888',
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
  rewardCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  rewardCardDisabled: {
    opacity: 0.5,
  },
  rewardIcon: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(42, 42, 42, 0.8)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  rewardInfo: {
    flex: 1,
  },
  rewardTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 4,
  },
  rewardTitleDisabled: {
    color: '#666',
  },
  rewardDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#888',
    marginBottom: 6,
  },
  rewardDescriptionDisabled: {
    color: '#555',
  },
  rewardPoints: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#d2691e',
  },
  rewardPointsDisabled: {
    color: '#555',
  },
  redeemButton: {
    backgroundColor: '#d2691e',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  redeemButtonDisabled: {
    backgroundColor: '#333',
  },
  redeemButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
  },
  redeemButtonTextDisabled: {
    color: '#666',
  },
  earnCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  earnItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(51, 51, 51, 0.5)',
  },
  earnAction: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    flex: 1,
  },
  earnPoints: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#d2691e',
  },
  bottomSpacing: {
    height: 120,
  },
});
