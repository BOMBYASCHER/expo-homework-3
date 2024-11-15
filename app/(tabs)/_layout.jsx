import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'About' }} />
      <Tabs.Screen name="languages" options={{ title: 'My programming languages' }} />
    </Tabs>
  );
}