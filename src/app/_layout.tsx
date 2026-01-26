import "@/global.css";
import { NAV_THEME } from "@/lib/theme";
import { ThemeProvider } from "@react-navigation/native";

import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { PortalHost } from "@rn-primitives/portal";
import * as Device from "expo-device";
import { Stack } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import { colorScheme } from "nativewind";
import { Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from "sonner-native";

if (
  Device.deviceType !== Device.DeviceType.TABLET &&
  Device.deviceType !== Device.DeviceType.DESKTOP &&
  Device.deviceType !== Device.DeviceType.UNKNOWN &&
  Platform.OS !== "web"
) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
}

export const unstable_settings = {
  // Ensure that reloading on web works correctly
  initialRouteName: "(auth)",
  anchor: "(tabs)",
};

export default function RootLayout() {
  const scheme = colorScheme.get() || "dark";

  return (
    <ThemeProvider value={NAV_THEME[scheme]}>
      <ClerkProvider
        tokenCache={tokenCache}
        publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      >
        <GestureHandlerRootView className="flex-1">
          <StatusBar style={scheme == "dark" ? "light" : "dark"} />
          <Root />
          <Toaster />
        </GestureHandlerRootView>
      </ClerkProvider>
    </ThemeProvider>
  );
}

export function Root() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Protected guard={!!isSignedIn}>
          <Stack.Screen name="(tabs)" />
        </Stack.Protected>
      </Stack>
      <PortalHost />
    </SafeAreaProvider>
  );
}
