import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import naruto from "@/assets/images/ui/naruto.jpeg";
import sasuke from "@/assets/images/ui/sasuke.jpeg";
import elon_musk from "@/assets/images/ui/elon_musk.jpg";
import uzumaki from "@/assets/images/ui/uzumaki.jpg";

// Sample images array
const images = [naruto, sasuke, elon_musk];

// Main image data
const imageData = Array.from({ length: 20 }, (_, index) => ({
  id: index.toString(),
  src: images[index % images.length],
}));

// Nested image data
const nestedImageData = Array.from({ length: 20 }, (_, index) => ({
  id: index.toString(),
  src: uzumaki,
}));

// Reusable Component

interface ImageCardProps {
    src: ImageSourcePropType;
  }
  
  const ImageCard: React.FC<ImageCardProps> = ({ src }) => (
    <View style={styles.cardContainer}>
      <Image source={src} style={styles.cardImage} />
      <View style={styles.iconContainer}>
        <AntDesign name="hearto" size={24} color="black" />
        <FontAwesome name="comment-o" size={24} color="black" />
        <Feather name="send" size={24} color="black" />
      </View>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.description}>This is a description</Text>
    </View>
  );

// Main Component
const Index = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: "white",
      }}
    >
      <View style={styles.container}>
        <FlatList
          data={imageData}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <LinearGradient
                colors={["#CA1D7E", "#E35157", "#F2703F"]}
                style={styles.gradient}
              >
                <View style={styles.imageContainer}>
                  <Image source={item.src} style={styles.image} />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={nestedImageData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ImageCard src={item.src} />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  horizontalList: {
    paddingHorizontal: 10,
  },
  gradient: {
    padding: 3,
    borderRadius: 55,
    marginHorizontal: 5,
  },
  imageContainer: {
    borderRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  cardContainer: {
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginTop: 5,
  },
});

export default Index;
