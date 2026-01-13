import "@/global.css";
import { NAV_THEME } from "@/lib/theme";
import { ThemeProvider } from "@react-navigation/native";

import { PortalHost } from "@rn-primitives/portal";
import * as Device from "expo-device";
import { Stack } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import { colorScheme } from "nativewind";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

if (
  Device.deviceType !== Device.DeviceType.TABLET &&
  Device.deviceType !== Device.DeviceType.DESKTOP &&
  Device.deviceType !== Device.DeviceType.UNKNOWN &&
  Platform.OS !== "web"
) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
}

export default function RootLayout() {
  const scheme = colorScheme.get() || "dark";
  return (
    <ThemeProvider value={NAV_THEME[scheme]}>
      <SafeAreaProvider>
        <StatusBar style={scheme == "dark" ? "light" : "dark"} />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
        <PortalHost />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
