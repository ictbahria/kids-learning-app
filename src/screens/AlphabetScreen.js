import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const AlphabetScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedLetters, setCompletedLetters] = useState([]);

  const currentLetter = ALPHABETS[currentIndex];

  const markAsCompleted = () => {
    if (!completedLetters.includes(currentIndex)) {
      setCompletedLetters([...completedLetters, currentIndex]);
    }
  };

  const goToNext = () => {
    if (currentIndex < ALPHABETS.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${((currentIndex + 1) / ALPHABETS.length) * 100}%` }]} />
      </View>

      <Text style={styles.progressText}>{currentIndex + 1} / {ALPHABETS.length}</Text>

      <View style={styles.letterDisplay}>
        <Text style={styles.bigLetter}>{currentLetter}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.soundButton}>
          <Text style={styles.buttonText}>🔊 Hear Letter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.completeButton} onPress={markAsCompleted}>
          <Text style={styles.buttonText}>✓ Mark Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationContainer}>
        <TouchableOpacity style={[styles.navButton, currentIndex === 0 && styles.disabledButton]} onPress={goToPrevious} disabled={currentIndex === 0}>
          <Text style={styles.navButtonText}>← Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, currentIndex === ALPHABETS.length - 1 && styles.disabledButton]} onPress={goToNext} disabled={currentIndex === ALPHABETS.length - 1}>
          <Text style={styles.navButtonText}>Next →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.letterGrid}>
        <Text style={styles.gridTitle}>All Letters:</Text>
        <View style={styles.grid}>
          {ALPHABETS.map((letter, index) => (
            <TouchableOpacity key={index} style={[styles.gridItem, currentIndex === index && styles.activeGridItem, completedLetters.includes(index) && styles.completedGridItem]} onPress={() => setCurrentIndex(index)}>
              <Text style={styles.gridText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', padding: 20 },
  progressBar: { height: 10, backgroundColor: '#E0E0E0', borderRadius: 5, overflow: 'hidden', marginBottom: 10 },
  progressFill: { height: '100%', backgroundColor: '#667EEA' },
  progressText: { fontSize: 14, color: '#666', marginBottom: 20, textAlign: 'center' },
  letterDisplay: { backgroundColor: '#667EEA', borderRadius: 20, padding: 40, marginBottom: 30, alignItems: 'center', justifyContent: 'center' },
  bigLetter: { fontSize: 120, fontWeight: 'bold', color: '#fff' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  soundButton: { flex: 1, backgroundColor: '#FF6B6B', paddingVertical: 15, borderRadius: 10, marginRight: 10, alignItems: 'center' },
  completeButton: { flex: 1, backgroundColor: '#4ECDC4', paddingVertical: 15, borderRadius: 10, marginLeft: 10, alignItems: 'center' },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  navigationContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  navButton: { flex: 1, backgroundColor: '#667EEA', paddingVertical: 12, borderRadius: 10, marginHorizontal: 5, alignItems: 'center' },
  navButtonText: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
  disabledButton: { backgroundColor: '#CCCCCC' },
  letterGrid: { marginTop: 20 },
  gridTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridItem: { width: '23%', aspectRatio: 1, backgroundColor: '#E8E8E8', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
  activeGridItem: { backgroundColor: '#667EEA' },
  completedGridItem: { backgroundColor: '#4ECDC4' },
  gridText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
});

export default AlphabetScreen;
