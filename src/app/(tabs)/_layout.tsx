import { Text } from "@/components/ui/text";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList>
        <TabTrigger name="home" href="/">
          <Text>Home</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
