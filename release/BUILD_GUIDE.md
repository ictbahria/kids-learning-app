# Build Guide - Kids Learning App

## Prerequisites

### Common Requirements
- Node.js (v16 or higher)
- npm or yarn
- React Native CLI: `npm install -g react-native-cli`
- Git

### For Android Development
- Android Studio
- Android SDK (API 31 or higher)
- Java Development Kit (JDK 11 or higher)
- Gradle

### For iOS Development
- macOS (10.14 or higher)
- Xcode (12.0 or higher)
- CocoaPods
- iOS SDK (12.0 or higher)

## Android Build

### Step 1: Setup Android Environment

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Step 2: Install Dependencies

```bash
cd kids-learning-app
npm install
```

### Step 3: Run Development Build

```bash
npm run android
```

### Step 4: Create Release APK

```bash
cd android
./gradlew assembleRelease
# APK will be located at: app/build/outputs/apk/release/app-release.apk
```

### Step 5: Create Release AAB (for Google Play)

```bash
./gradlew bundleRelease
# AAB will be located at: app/build/outputs/bundle/release/app-release.aab
```

### Step 6: Sign the APK/AAB

```bash
# Create keystore (first time only)
keytool -genkey -v -keystore kids-learning-app.keystore \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias kids-learning-app

# Sign the APK
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 \
  -keystore kids-learning-app.keystore \
  app/build/outputs/apk/release/app-release.apk \
  kids-learning-app
```

## iOS Build

### Step 1: Install Dependencies

```bash
cd kids-learning-app
npm install

cd ios
pod install
cd ..
```

### Step 2: Run Development Build

```bash
npm run ios
```

### Step 3: Open Xcode Project

```bash
open ios/KidsLearningApp.xcworkspace
```

### Step 4: Build for Release

```bash
xcodebuild -workspace ios/KidsLearningApp.xcworkspace \
  -scheme KidsLearningApp \
  -configuration Release \
  -arch arm64
```

## Troubleshooting

### Android Issues

**Gradle build fails:**
```bash
cd android
./gradlew clean
cd ..
npm run android
```

**Emulator not found:**
```bash
emulator -list-avds
emulator -avd emulator-api-31
```

### iOS Issues

**Pod install fails:**
```bash
cd ios
rm -rf Pods
rm Podfile.lock
pod install
cd ..
```

### General Issues

**Module not found errors:**
```bash
rm -rf node_modules
npm install
```

---

For detailed troubleshooting: https://reactnative.dev/docs/troubleshooting
