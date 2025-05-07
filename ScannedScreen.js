import React from 'react';
import { View, Text, SectionList, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DATA = [
  {
    title: 'January 2025',
    data: [
      {
        id: '1',
        result: 'Armyworm',
        date: '2025-01-15',
        time: '10:22:45',
        image: 'https://storage.googleapis.com/a1aa/image/580a5fc4-e681-4e9c-3c2e-3992aa18cda5.jpg',
      },
    ],
  },
  {
    title: 'February 2025',
    data: [
      {
        id: '2',
        result: 'Armyworm',
        date: '2025-02-10',
        time: '14:15:30',
        image: 'https://storage.googleapis.com/a1aa/image/580a5fc4-e681-4e9c-3c2e-3992aa18cda5.jpg',
      },
    ],
  },
  {
    title: 'March 2025',
    data: [
      {
        id: '3',
        result: 'Armyworm',
        date: '2025-03-05',
        time: '08:45:12',
        image: 'https://storage.googleapis.com/a1aa/image/580a5fc4-e681-4e9c-3c2e-3992aa18cda5.jpg',
      },
    ],
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://yourimageshare.com/ib/vKaMQuCmOM' }}
          style={styles.logo}
        />
        <Text style={styles.headerText}>
          ONION <Text style={{ color: '#6b2e5c' }}>SCAN</Text>
        </Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>SCANNED PEST HISTORY</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={20} color="gray" style={{ marginRight: 10 }} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
        />
        <TouchableOpacity>
          <FontAwesome name="search" size={20} color="gray" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      </View>

      {/* SectionList grouped by month */}
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.resultText}>
                RESULT: <Text style={{ color: '#3a5a00' }}>{item.result}</Text>
              </Text>
              <Text style={styles.detailText}>DATE: <Text style={{ fontWeight: 'normal' }}>{item.date}</Text></Text>
              <Text style={styles.detailText}>TIME: <Text style={{ fontWeight: 'normal' }}>{item.time}</Text></Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 6,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 6,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    fontFamily: 'Montserrat',
    color: '#555',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6b2e5c',
    marginTop: 12,
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 10,
  },
  resultText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
    color: '#333',
  },
  detailText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#555',
  },
});
