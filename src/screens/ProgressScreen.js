import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getProgress } from '../utils/storage';

const ProgressScreen = () => {
  const [progress, setProgress] = useState({
    alphabetsCompleted: 0,
    numbersCompleted: 0,
    totalSessions: 0,
    lastUpdated: new Date().toLocaleDateString(),
  });

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const data = await getProgress();
      if (data) setProgress(data);
    } catch (error) {
      console.log('Error loading progress:', error);
    }
  };

  const alphabetPercentage = (progress.alphabetsCompleted / 26) * 100;
  const numberPercentage = (progress.numbersCompleted / 10) * 100;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{progress.alphabetsCompleted}</Text>
          <Text style={styles.statLabel}>Alphabets Learned</Text>
          <View style={styles.miniProgressBar}>
            <View style={[styles.miniProgressFill, { width: `${alphabetPercentage}%`, backgroundColor: '#667EEA' }]} />
          </View>
          <Text style={styles.percentText}>{Math.round(alphabetPercentage)}%</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>{progress.numbersCompleted}</Text>
          <Text style={styles.statLabel}>Numbers Learned</Text>
          <View style={styles.miniProgressBar}>
            <View style={[styles.miniProgressFill, { width: `${numberPercentage}%`, backgroundColor: '#4ECDC4' }]} />
          </View>
          <Text style={styles.percentText}>{Math.round(numberPercentage)}%</Text>
        </View>
      </View>

      <View style={styles.achievementsContainer}>
        <Text style={styles.sectionTitle}>🏆 Achievements</Text>

        <View style={styles.achievementCard}>
          <Text style={styles.achievementEmoji}>🌟</Text>
          <View style={styles.achievementText}>
            <Text style={styles.achievementTitle}>Quick Learner</Text>
            <Text style={styles.achievementDesc}>Complete 5 alphabets</Text>
          </View>
          {progress.alphabetsCompleted >= 5 ? <Text style={styles.unlocked}>✓ Unlocked</Text> : <Text style={styles.locked}>🔒 {5 - progress.alphabetsCompleted} more</Text>}
        </View>

        <View style={styles.achievementCard}>
          <Text style={styles.achievementEmoji}>🎯</Text>
          <View style={styles.achievementText}>
            <Text style={styles.achievementTitle}>Alphabet Master</Text>
            <Text style={styles.achievementDesc}>Complete all 26 letters</Text>
          </View>
          {progress.alphabetsCompleted === 26 ? <Text style={styles.unlocked}>✓ Unlocked</Text> : <Text style={styles.locked}>🔒 {26 - progress.alphabetsCompleted} more</Text>}
        </View>

        <View style={styles.achievementCard}>
          <Text style={styles.achievementEmoji}>🔢</Text>
          <View style={styles.achievementText}>
            <Text style={styles.achievementTitle}>Number Champion</Text>
            <Text style={styles.achievementDesc}>Complete all 10 numbers</Text>
          </View>
          {progress.numbersCompleted === 10 ? <Text style={styles.unlocked}>✓ Unlocked</Text> : <Text style={styles.locked}>🔒 {10 - progress.numbersCompleted} more</Text>}
        </View>

        <View style={styles.achievementCard}>
          <Text style={styles.achievementEmoji}>🚀</Text>
          <View style={styles.achievementText}>
            <Text style={styles.achievementTitle}>Super Learner</Text>
            <Text style={styles.achievementDesc}>Complete 10 sessions</Text>
          </View>
          {progress.totalSessions >= 10 ? <Text style={styles.unlocked}>✓ Unlocked</Text> : <Text style={styles.locked}>🔒 {10 - progress.totalSessions} more</Text>}
        </View>
      </View>

      <View style={styles.statsBottom}>
        <Text style={styles.statsLabel}>Total Sessions: {progress.totalSessions}</Text>
        <Text style={styles.statsLabel}>Last Updated: {progress.lastUpdated}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', padding: 20 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  statCard: { flex: 1, backgroundColor: '#fff', borderRadius: 15, padding: 20, marginHorizontal: 5, alignItems: 'center', elevation: 3 },
  statValue: { fontSize: 40, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  statLabel: { fontSize: 12, color: '#666', textAlign: 'center', marginBottom: 10 },
  miniProgressBar: { width: '100%', height: 6, backgroundColor: '#E0E0E0', borderRadius: 3, overflow: 'hidden', marginBottom: 5 },
  miniProgressFill: { height: '100%' },
  percentText: { fontSize: 12, fontWeight: 'bold', color: '#333' },
  achievementsContainer: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  achievementCard: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 15, padding: 15, marginBottom: 10, alignItems: 'center', elevation: 2 },
  achievementEmoji: { fontSize: 30, marginRight: 15 },
  achievementText: { flex: 1 },
  achievementTitle: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  achievementDesc: { fontSize: 12, color: '#666' },
  unlocked: { color: '#4ECDC4', fontWeight: 'bold', fontSize: 12 },
  locked: { color: '#999', fontWeight: 'bold', fontSize: 12 },
  statsBottom: { backgroundColor: '#fff', borderRadius: 15, padding: 20, alignItems: 'center' },
  statsLabel: { fontSize: 14, color: '#666', marginBottom: 8 },
});

export default ProgressScreen;
