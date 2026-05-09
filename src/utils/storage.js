import AsyncStorage from '@react-native-async-storage/async-storage';

const PROGRESS_KEY = 'kids_learning_progress';

export const saveProgress = async (progressData) => {
  try {
    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(progressData));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const getProgress = async () => {
  try {
    const data = await AsyncStorage.getItem(PROGRESS_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting progress:', error);
    return null;
  }
};
