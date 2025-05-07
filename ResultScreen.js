import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/bd622f2d-f28b-4a28-8336-c2808f05b2ce.jpg' }}
            style={styles.logo}
          />
          <Text style={styles.title}>
            ONION <Text style={styles.subtitle}>SCAN</Text>
          </Text>
        </View>
        
        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.resultImage}
          />
        </View>

        {/* Results Section */}
        <View style={styles.section}>
          <Text style={styles.resultText}>
            RESULT: <Text style={styles.resultHighlight}>{item.title}</Text>
          </Text>

          {/* Detail Blocks */}
          <View style={styles.detailBlock}>
            <Text style={styles.detailTitle}>COMMON NAME:</Text>
            <Text style={styles.detailText}>{item.title}</Text>
          </View>
          <View style={styles.detailBlock}>
            <Text style={styles.detailTitle}>ORDER & FAMILY:</Text>
            <Text style={styles.detailText}>{item.order}: {item.family}</Text>
          </View>
          <View style={styles.detailBlock}>
            <Text style={styles.detailTitle}>SCIENTIFIC NAME:</Text>
            <Text style={styles.detailText}>{item.species}</Text>
          </View>
          <View style={styles.detailBlock}>
            <Text style={styles.detailTitle}>FILIPINO NAMES:</Text>
            <Text style={styles.detailText}>N/A</Text> {/* Modify as per your data */}
          </View>
          <View style={styles.detailBlock}>
            <Text style={styles.detailTitle}>STAGES OF DEVELOPMENT:</Text>
            <Text style={styles.detailText}>N/A</Text> {/* Modify as per your data */}
          </View>
          <View style={styles.detailBlock}>
            <Text style={styles.detailTitle}>DAMAGE CHARACTERISTICS:</Text>
            <Text style={styles.detailText}>{item.damageCharacteristics}</Text> {/* Modify as per your data */}
          </View>
          <View style={styles.detailBlock}>
            <Text style={styles.detailTitle}>TREATMENT RECOMMENDATIONS:</Text>
            <Text style={styles.detailText}>{item.treatmentRecommendations}</Text> {/* Modify as per your data */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  card: { borderWidth: 1, borderColor: '#000', padding: 10 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  logo: { width: 40, height: 40, marginRight: 8 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#6B46C1' },
  subtitle: { color: '#9F7AEA' },
  imageContainer: { borderWidth: 2, borderColor: '#3B82F6', marginBottom: 10 },
  resultImage: { width: '100%', height: 200, resizeMode: 'cover' },
  section: { marginTop: 10 },
  resultText: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#111' },
  resultHighlight: { color: '#15803D' },
  detailBlock: { marginTop: 10 },
  detailTitle: { fontSize: 12, fontWeight: 'bold', color: '#4A5568' },
  detailText: { fontSize: 12, color: '#4A5568' },
});
