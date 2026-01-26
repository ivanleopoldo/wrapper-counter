import { ChartPie, House, Settings } from "@/lib/icons";
import {
  TabList,
  Tabs,
  TabSlot,
  TabTrigger,
  TabTriggerSlotProps,
} from "expo-router/ui";
import React, { cloneElement } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabsLayout() {
  return (
    <Tabs className="p-4">
      <SafeAreaView className="flex-1">
        <TabSlot />
      </SafeAreaView>
      <TabList className="gap-2 rounded-2xl justify-around bg-card border border-border self-center px-2 py-1">
        <TabTrigger name="home" href="/" asChild>
          <TabContainer>
            <House />
          </TabContainer>
        </TabTrigger>
        <TabTrigger name="analytics" href="/analytics" asChild>
          <TabContainer>
            <ChartPie />
          </TabContainer>
        </TabTrigger>
        <TabTrigger name="settings" href="/settings" asChild>
          <TabContainer>
            <Settings />
          </TabContainer>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

function TabContainer({ children, ...props }: TabTriggerSlotProps) {
  const childrenArray = React.Children.toArray(children);
  return (
    <Pressable className="p-2 " {...props}>
      <View className="flex flex-col items-center gap-1">
        {childrenArray.map((child) =>
          cloneElement(child as any, {
            className: props.isFocused
              ? "text-secondary-foreground"
              : "text-muted-foreground/70",
          })
        )}
      </View>
    </Pressable>
  );
}
