import { Button } from "@/components/ui/button";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function ForgotPassword() {
  return (
    <View>
      <Text>ForgotPassword</Text>
      <Button onPress={() => router.back()}>
        <Text>Back</Text>
      </Button>
    </View>
  );
}
