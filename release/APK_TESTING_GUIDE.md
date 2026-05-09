# APK Testing Guide - Kids Learning App

## Prerequisites

- Android device or emulator (Android 6.0+)
- APK file: `app-release.apk`
- USB cable (for device testing)
- USB debugging enabled
- ADB (Android Debug Bridge) installed

## Setting Up Test Device

### For Physical Android Device

1. **Enable USB Debugging:**
   - Go to Settings → About Phone
   - Tap "Build number" 7 times to enable Developer Mode
   - Go to Settings → Developer Options
   - Enable "USB Debugging"
   - Enable "Install from Unknown Sources"

2. **Connect Device:**
   ```bash
   adb devices
   ```

### For Android Emulator

1. **Launch Emulator:**
   ```bash
   emulator -avd emulator-api-31
   ```

## Installing APK

### Method 1: Using ADB (Recommended)

```bash
cd release/
adb install app-release.apk

# Verify installation
adb shell pm list packages | grep kids
```

### Method 2: Direct Installation on Device

1. Copy APK to device
2. Open file manager
3. Locate APK file
4. Tap to install
5. Grant permissions if prompted

## Launch & Initial Testing

### Test App Launch

```bash
# Launch app
adb shell am start -n com.kidlearning/com.kidlearning.MainActivity

# Check for crashes
adb logcat | grep -i crash
```

## View Logs

```bash
# Real-time log view
adb logcat

# Filter by app tag
adb logcat | grep "kids-learning"

# Save logs to file
adb logcat > logs.txt

# Clear logs
adb logcat -c
```

## Uninstall APK

```bash
# Uninstall via ADB
adb uninstall com.kidlearning

# Verify uninstall
adb shell pm list packages | grep kids
```

## Useful ADB Commands

```bash
adb devices                           # List connected devices
adb install app.apk                   # Install APK
adb uninstall com.package             # Uninstall app
adb logcat                            # View live logs
adb shell pm list packages            # List installed apps
adb shell am force-stop package       # Force stop app
```

---

For additional help: https://developer.android.com/studio/command-line/adb
