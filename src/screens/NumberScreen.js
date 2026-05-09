import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const NUMBERS = Array.from({ length: 10 }, (_, i) => i);

const NumberScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedNumbers, setCompletedNumbers] = useState([]);

  const currentNumber = NUMBERS[currentIndex];

  const markAsCompleted = () => {
    if (!completedNumbers.includes(currentIndex)) {
      setCompletedNumbers([...completedNumbers, currentIndex]);
    }
  };

  const goToNext = () => {
    if (currentIndex < NUMBERS.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const renderDots = () => {
    return Array.from({ length: currentNumber }, (_, i) => (
      <View key={i} style={styles.dot} />
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${((currentIndex + 1) / NUMBERS.length) * 100}%` }]} />
      </View>

      <Text style={styles.progressText}>{currentIndex + 1} / {NUMBERS.length}</Text>

      <View style={styles.numberDisplay}>
        <Text style={styles.bigNumber}>{currentNumber}</Text>
      </View>

      <View style={styles.dotsContainer}>
        <Text style={styles.dotsLabel}>Count the dots:</Text>
        <View style={styles.dots}>{renderDots()}</View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.soundButton}>
          <Text style={styles.buttonText}>🔊 Hear Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.completeButton} onPress={markAsCompleted}>
          <Text style={styles.buttonText}>✓ Mark Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationContainer}>
        <TouchableOpacity style={[styles.navButton, currentIndex === 0 && styles.disabledButton]} onPress={goToPrevious} disabled={currentIndex === 0}>
          <Text style={styles.navButtonText}>← Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, currentIndex === NUMBERS.length - 1 && styles.disabledButton]} onPress={goToNext} disabled={currentIndex === NUMBERS.length - 1}>
          <Text style={styles.navButtonText}>Next →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.numberGrid}>
        <Text style={styles.gridTitle}>All Numbers:</Text>
        <View style={styles.grid}>
          {NUMBERS.map((number, index) => (
            <TouchableOpacity key={index} style={[styles.gridItem, currentIndex === index && styles.activeGridItem, completedNumbers.includes(index) && styles.completedGridItem]} onPress={() => setCurrentIndex(index)}>
              <Text style={styles.gridText}>{number}</Text>
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
  progressFill: { height: '100%', backgroundColor: '#4ECDC4' },
  progressText: { fontSize: 14, color: '#666', marginBottom: 20, textAlign: 'center' },
  numberDisplay: { backgroundColor: '#4ECDC4', borderRadius: 20, padding: 40, marginBottom: 30, alignItems: 'center', justifyContent: 'center' },
  bigNumber: { fontSize: 120, fontWeight: 'bold', color: '#fff' },
  dotsContainer: { backgroundColor: '#fff', borderRadius: 15, padding: 20, marginBottom: 20, alignItems: 'center' },
  dotsLabel: { fontSize: 14, color: '#666', marginBottom: 15, fontWeight: 'bold' },
  dots: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', maxWidth: 200 },
  dot: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#4ECDC4', margin: 8 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  soundButton: { flex: 1, backgroundColor: '#FF6B6B', paddingVertical: 15, borderRadius: 10, marginRight: 10, alignItems: 'center' },
  completeButton: { flex: 1, backgroundColor: '#4ECDC4', paddingVertical: 15, borderRadius: 10, marginLeft: 10, alignItems: 'center' },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  navigationContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  navButton: { flex: 1, backgroundColor: '#4ECDC4', paddingVertical: 12, borderRadius: 10, marginHorizontal: 5, alignItems: 'center' },
  navButtonText: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
  disabledButton: { backgroundColor: '#CCCCCC' },
  numberGrid: { marginTop: 20 },
  gridTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridItem: { width: '23%', aspectRatio: 1, backgroundColor: '#E8E8E8', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
  activeGridItem: { backgroundColor: '#4ECDC4' },
  completedGridItem: { backgroundColor: '#FFE66D' },
  gridText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
});

export default NumberScreen;
