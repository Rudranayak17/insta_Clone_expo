import Colors from "@/constants/Colors";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { Tabs, useSegments } from "expo-router";

import reelsIcon from "@/assets/images/ui/instagram-reels-icon.png";
import { Image, TouchableOpacity, View } from "react-native";
import InstaIcon from "@/assets/images/ui/instagram-text-icon.png";
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          headerTitle(props) {
            return (
              <Image
                source={InstaIcon}
                style={{ width: 90, height: 50, resizeMode: "contain" }}
              />
            );
          },
          headerRight(props) {
            return (
              <View
                style={{
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  gap: 20,
                  alignItems:"center"
                }}
              >
                <TouchableOpacity onPress={()=>console.log("fav")}>
                  <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log("message")}>
                  <FontAwesome5
                    name="facebook-messenger"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            );
          },
          // headerLeft: () => {
          //   return <Image
          //     source={InstaIcon}
          //     style={{ width: 200, height: 200, resizeMode: "contain" }}
          //   />;
          // },
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="search1" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="upload/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="squared-plus" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="reels/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Image
              source={reelsIcon}
              style={{
                padding: 10,
                height: 10,
                width: 10,
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user-circle" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
