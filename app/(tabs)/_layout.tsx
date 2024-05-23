import Colors from "@/constants/Colors";
import { AntDesign, Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs, useSegments } from "expo-router";

import reelsIcon from "@/assets/images/ui/instagram-reels-icon.png";
import { Image } from "react-native";

const TabsLayout = () => {


  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,

      }}
    
    >
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="search1" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="upload/index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="squared-plus" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="reels/index"
        options={{
          title: "Chats",
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
          title: "Settings",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user-circle" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
    
    </Tabs>
  );
};

export default TabsLayout;
