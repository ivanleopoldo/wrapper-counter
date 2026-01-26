import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSSO, type StartSSOFlowParams } from "@clerk/clerk-expo";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { useColorScheme } from "nativewind";
import * as React from "react";
import { Image, Platform, View, type ImageSourcePropType } from "react-native";
import { Text } from "./text";

WebBrowser.maybeCompleteAuthSession();

type SocialConnectionStrategy = Extract<
  StartSSOFlowParams["strategy"],
  "oauth_google" | "oauth_github" | "oauth_apple"
>;

const SOCIAL_CONNECTION_STRATEGIES: {
  type: SocialConnectionStrategy;
  title: string;
  source: ImageSourcePropType;
  useTint?: boolean;
}[] = [
  {
    type: "oauth_google",
    title: "Google",
    source: { uri: "https://img.clerk.com/static/google.png?width=160" },
    useTint: false,
  },
  {
    type: "oauth_apple",
    title: "Apple",
    source: { uri: "https://img.clerk.com/static/apple.png?width=160" },
    useTint: true,
  },
];

export function SocialConnections() {
  const { colorScheme } = useColorScheme();
  const { startSSOFlow } = useSSO();

  function onSocialLoginPress(strategy: SocialConnectionStrategy) {
    return async () => {
      try {
        // Start the authentication process by calling `startSSOFlow()`
        const { createdSessionId, setActive, signIn } = await startSSOFlow({
          strategy,
          // For web, defaults to current path
          // For native, you must pass a scheme, like AuthSession.makeRedirectUri({ scheme, path })
          // For more info, see https://docs.expo.dev/versions/latest/sdk/auth-session/#authsessionmakeredirecturioptions
          redirectUrl: AuthSession.makeRedirectUri({}),
        });

        // If sign in was successful, set the active session
        if (createdSessionId && setActive) {
          setActive({ session: createdSessionId });
          // TODO: If your app does not use `Stack.Protected`, redirect authenticated users to your protected screen
          return;
        }

        // TODO: Handle other statuses
        // If there is no `createdSessionId`,
        // there are missing requirements, such as MFA
        // Use the `signIn` or `signUp` returned from `startSSOFlow`
        // to handle next steps
      } catch (err) {
        // See https://go.clerk.com/mRUDrIe for more info on error handling
        console.error(JSON.stringify(err, null, 2));
      }
    };
  }

  return (
    <View className="gap-2 sm:flex-row sm:gap-3">
      {SOCIAL_CONNECTION_STRATEGIES.map((strategy) => {
        return (
          <Button
            key={strategy.type}
            variant="outline"
            size="sm"
            className="sm:flex-1"
            onPress={onSocialLoginPress(strategy.type)}
          >
            <Image
              className={cn(
                "size-4",
                strategy.useTint && Platform.select({ web: "dark:invert" })
              )}
              tintColor={Platform.select({
                native: strategy.useTint
                  ? colorScheme === "dark"
                    ? "white"
                    : "black"
                  : undefined,
              })}
              source={strategy.source}
            />
            <Text>{strategy.title}</Text>
          </Button>
        );
      })}
    </View>
  );
}
