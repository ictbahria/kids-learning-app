import Sound from 'react-native-sound';

Sound.setCategory('Playback');

export const playSound = (soundName) => {
  return new Promise((resolve, reject) => {
    const sound = new Sound(`${soundName}.mp3`, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.error('Error loading sound:', error);
        reject(error);
      } else {
        sound.play((success) => {
          if (success) resolve();
          else reject(new Error('Error playing sound'));
        });
      }
    });
  });
};
