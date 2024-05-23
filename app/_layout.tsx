import { Stack, usePathname } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const Layout = () => {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Layout />
    </GestureHandlerRootView>
  );
}
