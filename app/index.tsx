import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import instagramText from "@/assets/images/ui/instagram-text-icon.png";
import { Redirect, useRouter } from "expo-router";

const Index: React.FC = () => {
  return <Redirect href={"/login"} />;
};

export default Index;
