import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Bell, CreditCard, MapPin, Settings, CircleHelp as HelpCircle, LogOut, CreditCard as Edit } from 'lucide-react-native';
// import BackgroundPattern from '@/components/BackgroundPattern';

export default function AccountScreen() {
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 123-4567',
    memberSince: 'March 2023',
    totalOrders: 47,
    favoriteOrder: 'Double Espresso',
  };

  const menuItems = [
    {
      id: 1,
      title: 'Edit Profile',
      subtitle: 'Update your personal information',
      icon: <Edit size={24} color="#888" />,
    },
    {
      id: 2,
      title: 'Notifications',
      subtitle: 'Manage your notification preferences',
      icon: <Bell size={24} color="#888" />,
    },
    {
      id: 3,
      title: 'Payment Methods',
      subtitle: 'Manage cards and payment options',
      icon: <CreditCard size={24} color="#888" />,
    },
    {
      id: 4,
      title: 'Addresses',
      subtitle: 'Manage delivery addresses',
      icon: <MapPin size={24} color="#888" />,
    },
    {
      id: 5,
      title: 'Settings',
      subtitle: 'App preferences and privacy',
      icon: <Settings size={24} color="#888" />,
    },
    {
      id: 6,
      title: 'Help & Support',
      subtitle: 'Get help or contact support',
      icon: <HelpCircle size={24} color="#888" />,
    },
  ];

  return (
    <View style={styles.container}>
      {/* <BackgroundPattern /> */}
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Account</Text>
          </View>

          {/* Profile Card */}
          <View style={styles.profileCard}>
            <View style={styles.profileHeader}>
              <View style={styles.avatarContainer}>
                <User size={40} color="#d2691e" />
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>
                <Text style={styles.memberSince}>Member since {user.memberSince}</Text>
              </View>
            </View>

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{user.totalOrders}</Text>
                <Text style={styles.statLabel}>Total Orders</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statText}>{user.favoriteOrder}</Text>
                <Text style={styles.statLabel}>Favorite Order</Text>
              </View>
            </View>
          </View>

          {/* Contact Info */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Information</Text>
            <View style={styles.infoCard}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Email</Text>
                <Text style={styles.infoValue}>{user.email}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Phone</Text>
                <Text style={styles.infoValue}>{user.phone}</Text>
              </View>
            </View>
          </View>

          {/* Menu Items */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account Settings</Text>
            {menuItems.map((item) => (
              <TouchableOpacity key={item.id} style={styles.menuItem}>
                <View style={styles.menuIcon}>
                  {item.icon}
                </View>
                <View style={styles.menuContent}>
                  <Text style={styles.menuTitle}>{item.title}</Text>
                  <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton}>
            <LogOut size={24} color="#ff4444" />
            <Text style={styles.logoutText}>Sign Out</Text>
          </TouchableOpacity>

          {/* App Info */}
          <View style={styles.appInfo}>
            <Text style={styles.appInfoText}>NGOPISLURR Rewards App</Text>
            <Text style={styles.appVersion}>Version 1.0.0</Text>
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
  },
  profileCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    margin: 24,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(42, 42, 42, 0.8)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#888',
    marginBottom: 4,
  },
  memberSince: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#d2691e',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(51, 51, 51, 0.5)',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#d2691e',
    marginBottom: 4,
  },
  statText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#888',
  },
  statDivider: {
    width: 1,
    backgroundColor: 'rgba(51, 51, 51, 0.5)',
    marginHorizontal: 20,
  },
  section: {
    marginHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(51, 51, 51, 0.5)',
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#888',
  },
  infoValue: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#fff',
  },
  menuItem: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  menuIcon: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(42, 42, 42, 0.8)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 4,
  },
  menuSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#888',
  },
  logoutButton: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    marginHorizontal: 24,
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#ff4444',
    backdropFilter: 'blur(10px)',
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#ff4444',
    marginLeft: 8,
  },
  appInfo: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  appInfoText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#888',
    marginBottom: 4,
  },
  appVersion: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  bottomSpacing: {
    height: 120,
  },
});
