## Running locally

#### Pre Requisite

- node and npm
- To run the app on an android device
  - Java JDK(v8 or above)
  - Android SDK
  - Android Studio(can be used for starting the emulator)
- To run the app on an iOS device
  - XCode

#### Steps

- Download dependencies using `npm install`
- To run the app on android
  - Create local.properties file in android/ and add sdk.dir = {SDK pathname}
  - Start the android emulator(Android Studio can be used)
  - Use `npx react-native start` & `npx react-native run-android`
- To run the app on iOS
  - Go to ios directory and run `pod install` (only once)
  - Use `npx react-native run-ios`
