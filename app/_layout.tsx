import { Stack, usePathname } from "expo-router";
import { useEffect } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
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
    <RootSiblingParent>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Layout />
        </GestureHandlerRootView>
      </Provider>
    </RootSiblingParent>
  );
}
