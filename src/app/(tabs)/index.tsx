import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import React from "react";
import { View } from "react-native";

export default function Index() {
  const [sold, setSold] = React.useState(0);

  return (
    <View className="gap-4 md:flex-row">
      <Card className="p-4">
        <View>
          <Text className="text-4xl font-extrabold">Sold</Text>
          <Text className="text-4xl font-bold">{sold}</Text>
        </View>
        <View>
          <Button onPress={() => setSold(sold + 1)} className="mt-4 mb-2">
            <Text>Add</Text>
          </Button>
          <Button
            onPress={() => {
              if (sold > 0) setSold(sold - 1);
            }}
          >
            <Text>Subtract</Text>
          </Button>
        </View>
      </Card>
      <Card className="p-4">
        <View>
          <Text>hello</Text>
        </View>
      </Card>
    </View>
  );
}
