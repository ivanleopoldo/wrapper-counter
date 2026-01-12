import "../global.css";

import * as Device from "expo-device";
import { Stack } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";

if (Device.deviceType !== Device.DeviceType.TABLET) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
}

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
