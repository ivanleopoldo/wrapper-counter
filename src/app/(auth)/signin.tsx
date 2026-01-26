import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SocialConnections } from "@/components/ui/social-connections";
import { Text } from "@/components/ui/text";
import { isClerkAPIResponseError, useSignIn } from "@clerk/clerk-expo";
import { router } from "expo-router";
import React, { useCallback, useRef, useState } from "react";
import { Image, TextInput, View } from "react-native";
import { toast } from "sonner-native";

export default function SignIn() {
  const { isLoaded, signIn, setActive } = useSignIn();

  const passwordInputRef = useRef<TextInput>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = useCallback(async () => {
    if (!isLoaded) return;

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password: password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
      }
    } catch (err) {
      if (isClerkAPIResponseError(err)) {
        err.errors.forEach((e) => {
          if (e.longMessage) toast.error(e.longMessage);
        });
      }
      console.error("Error during sign in:", err);
    }
  }, [isLoaded, signIn, setActive, email, password]);

  const onEmailSubmitEditing = () => {
    passwordInputRef.current?.focus();
  };

  return (
    <View className="flex flex-1 p-6 md:p-0 items-center justify-center">
      <View className="w-full md:w-1/3 gap-6">
        <View className="flex flex-row items-center justify-center gap-2">
          <Image
            className="aspect-square self-center size-6 rounded-md"
            source={require("../../../assets/images/icon.png")}
          />
          <Text className="text-md font-medium">Mig's Analytics</Text>
        </View>
        <View className="items-center">
          <Text className="text-2xl font-semibold">Welcome back</Text>
          <Text className="text-muted-foreground">Login with your account</Text>
        </View>
        <View className="gap-4">
          <View className="gap-1.5">
            <Label htmlFor="email" nativeID="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="m@example.com"
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={onEmailSubmitEditing}
              submitBehavior="submit"
              onChangeText={setEmail}
            />
          </View>
          <View className="gap-1.5">
            <View className="flex flex-row justify-between">
              <Label htmlFor="password" nativeID="password">
                Password
              </Label>
              <Button
                onPress={() => router.push("/forgot-password")}
                variant="link"
                size={"sm"}
                className="web:h-fit h-4 px-1 py-0 sm:h-4"
              >
                <Text>Forgot your password?</Text>
              </Button>
            </View>
            <Input
              ref={passwordInputRef}
              id="password"
              placeholder="Password"
              secureTextEntry
              returnKeyType="send"
              onChangeText={setPassword}
            />
          </View>
          <View className="gap-4">
            <Button onPress={onSignIn} className="mt-4">
              <Text>Sign In</Text>
            </Button>
            <Button variant={"link"} className="my-auto px-1 py-0 h-4">
              <Text>Don&apos;t have an account? Sign Up</Text>
            </Button>
          </View>
        </View>
        <View className="flex-row items-center">
          <Separator className="flex-1" />
          <Text className="text-muted-foreground px-4 text-sm">OR</Text>
          <Separator className="flex-1" />
        </View>
        <SocialConnections />
      </View>
    </View>
  );
}
