import { ChartPie, CogIcon, House } from "@/lib/icons";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabsLayout() {
  return (
    <Tabs className="p-4">
      <SafeAreaView className="flex-1">
        <TabSlot />
      </SafeAreaView>
      <TabList className="w-full sm:w-fit gap-2 rounded-2xl justify-around bg-card border border-border self-center px-2 py-1">
        <TabTrigger name="home" href="/">
          <View className="p-2">
            <House />
          </View>
        </TabTrigger>
        <TabTrigger name="analytics" href="/analytics">
          <View className="p-2">
            <ChartPie />
          </View>
        </TabTrigger>
        <TabTrigger name="settings" href="/settings">
          <View className="p-2">
            <CogIcon />
          </View>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
