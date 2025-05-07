import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Armyworm',
    species: 'Spodoptera frugiperda',
    order: 'Lepidoptera',
    family: 'Noctuidae',
    image:
      'https://storage.googleapis.com/a1aa/image/e4fbd73f-c8d8-4cd8-dddb-dfd311eed5a0.jpg',
  },
  {
    id: '2',
    title: 'Armyworm',
    species: 'Spodoptera frugiperda',
    order: 'Lepidoptera',
    family: 'Noctuidae',
    image:
      'https://storage.googleapis.com/a1aa/image/e4fbd73f-c8d8-4cd8-dddb-dfd311eed5a0.jpg',
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.species}>{item.species}</Text>
      <Text style={styles.detail}>Order: {item.order}</Text>
      <Text style={styles.detail}>Family: {item.family}</Text>
    </View>
  </TouchableOpacity>
);

const LibraryScreen = ({ navigation }) => {
  const handlePress = (item) => {
    navigation.navigate('ResultScreen', { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ONIONSCAN Logo (Top Center) */}
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://pplx-res.cloudinary.com/image/private/user_uploads/5212766/YaJdhSOLMBwCsnQ/onionscan.jpg',
          }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text style={styles.libraryTitle}>ONION PESTS OFFLINE LIBRARY</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#A0AEC0"
        />
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/000000/search--v1.png',
            }}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item item={item} onPress={() => handlePress(item)} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    paddingHorizontal: 8,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 0,
  },
  logo: {
    width: 220,
    height: 48,
  },
  libraryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF2F7',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    marginHorizontal: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#2D3748',
  },
  iconImage: {
    width: 20,
    height: 20,
    tintColor: '#4A5568',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 4,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  species: {
    fontSize: 13,
    color: '#4A5568',
  },
  detail: {
    fontSize: 12,
    color: '#718096',
  },
});

export default LibraryScreen;
