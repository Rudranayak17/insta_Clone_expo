import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen  name="register/index" options={{ headerShown: false}} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default Layout;
