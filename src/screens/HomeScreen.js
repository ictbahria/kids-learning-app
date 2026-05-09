import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#667EEA', '#764BA2']} style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to Kids Learning! 👋</Text>
        <Text style={styles.subtitle}>Let's start learning today!</Text>
      </LinearGradient>

      <View style={styles.content}>
        <TouchableOpacity style={[styles.card, { backgroundColor: '#FF6B6B' }]} onPress={() => navigation.navigate('Alphabets')}>
          <Text style={styles.cardTitle}>🔤 Learn Alphabets</Text>
          <Text style={styles.cardDescription}>Trace letters A-Z</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: '#4ECDC4' }]} onPress={() => navigation.navigate('Numbers')}>
          <Text style={styles.cardTitle}>🔢 Learn Numbers</Text>
          <Text style={styles.cardDescription}>Trace numbers 0-9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: '#FFE66D' }]} onPress={() => navigation.navigate('Progress')}>
          <Text style={[styles.cardTitle, { color: '#333' }]}>📊 My Progress</Text>
          <Text style={[styles.cardDescription, { color: '#666' }]}>Track your learning</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Have fun learning! 🎉</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingVertical: 40, paddingHorizontal: 20, alignItems: 'center' },
  welcomeText: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#E8E8FF' },
  content: { paddingHorizontal: 20, paddingVertical: 30 },
  card: { borderRadius: 15, padding: 25, marginBottom: 15, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
  cardDescription: { fontSize: 14, color: '#F0F0F0' },
  footer: { paddingVertical: 20, alignItems: 'center' },
  footerText: { fontSize: 16, color: '#667EEA', fontWeight: 'bold' },
});

export default HomeScreen;
