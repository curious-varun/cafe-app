import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Plus } from 'lucide-react-native';
import { useState } from 'react';
// import BackgroundPattern from '@/components/BackgroundPattern';

export default function MenuScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Espresso', 'Coffee', 'Tea', 'Pastries'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = [
    {
      id: 1,
      name: 'Double Espresso',
      description: 'Intense and rich coffee experience',
      price: '$4.50',
      category: 'Espresso',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: true,
    },
    {
      id: 2,
      name: 'Americano',
      description: 'Classic black coffee with hot water',
      price: '$3.75',
      category: 'Coffee',
      image: 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'Cappuccino',
      description: 'Perfect balance of espresso and steamed milk',
      price: '$5.25',
      category: 'Coffee',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: true,
    },
    {
      id: 4,
      name: 'Flat White',
      description: 'Smooth microfoam with rich espresso',
      price: '$4.95',
      category: 'Coffee',
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 5,
      name: 'Earl Grey Tea',
      description: 'Premium bergamot-infused black tea',
      price: '$3.25',
      category: 'Tea',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 6,
      name: 'Chocolate Croissant',
      description: 'Buttery pastry with dark chocolate',
      price: '$4.25',
      category: 'Pastries',
      image: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <View style={styles.container}>
      {/* <BackgroundPattern /> */}
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Our Menu</Text>
            <Text style={styles.subtitle}>Crafted with passion, served with love</Text>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Search size={20} color="#888" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search menu items..."
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
            contentContainerStyle={styles.categoriesContent}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonActive
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.categoryTextActive
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Menu Items */}
          <View style={styles.menuGrid}>
            {filteredItems.map((item) => (
              <TouchableOpacity key={item.id} style={styles.menuCard}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.image }} style={styles.menuImage} />
                  {item.popular && (
                    <View style={styles.popularBadge}>
                      <Text style={styles.popularText}>Popular</Text>
                    </View>
                  )}
                </View>
                <View style={styles.menuInfo}>
                  <Text style={styles.menuName}>{item.name}</Text>
                  <Text style={styles.menuDescription}>{item.description}</Text>
                  <View style={styles.menuFooter}>
                    <Text style={styles.menuPrice}>{item.price}</Text>
                    <TouchableOpacity style={styles.addButton}>
                      <Plus size={20} color="#fff" />
                    </TouchableOpacity>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    marginHorizontal: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#fff',
  },
  categoriesContainer: {
    marginBottom: 24,
  },
  categoriesContent: {
    paddingHorizontal: 24,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  categoryButtonActive: {
    backgroundColor: '#d2691e',
    borderColor: '#d2691e',
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#888',
  },
  categoryTextActive: {
    color: '#fff',
  },
  menuGrid: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  menuCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  imageContainer: {
    position: 'relative',
  },
  menuImage: {
    width: '100%',
    height: 220,
  },
  popularBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#d2691e',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  popularText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
  },
  menuInfo: {
    padding: 20,
  },
  menuName: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginBottom: 6,
  },
  menuDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#888',
    marginBottom: 16,
    lineHeight: 20,
  },
  menuFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuPrice: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#d2691e',
  },
  addButton: {
    backgroundColor: '#d2691e',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSpacing: {
    height: 120,
  },
});
