ionic build
cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore plantai.keystore /Users/diegomr86/mtx/plantai/platforms/android/build/outputs/apk/android-release-unsigned.apk plantai
/Users/diegomr86/Library/Android/sdk/build-tools/23.0.3/zipalign -v 4 /Users/diegomr86/mtx/plantai/platforms/android/build/outputs/apk/android-release-unsigned.apk ../cultivar.apk