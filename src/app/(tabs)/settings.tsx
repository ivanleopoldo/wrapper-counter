import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useClerk } from "@clerk/clerk-expo";
import React from "react";
import { View } from "react-native";

export default function Settings() {
  const { signOut } = useClerk();
  return (
    <View>
      <Text>Settings</Text>
      <Button variant={"destructive"} onPress={() => signOut()}>
        <Text>Log Out</Text>
      </Button>
    </View>
  );
}
