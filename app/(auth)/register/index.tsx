import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons"; // Import Entypo from Expo vector icons
import instagramText from "@/assets/images/ui/instagram-text-icon.png";
import { useRouter } from "expo-router";

const Index: React.FC = () => {
  const router = useRouter();
  const signUpHandler = () => {
    router.navigate("/login");
  };

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Image source={instagramText} style={styles.image} />
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Entypo name="user" size={24} color="black" />
          <TextInput placeholder="Username" keyboardType="email-address" style={styles.input} />
        </View>
        <View style={styles.inputWrapper}>
          <Entypo name="email" size={24} color="black" />
          <TextInput placeholder="Email-address" keyboardType="email-address" style={styles.input} />
        </View>
        <View style={styles.inputWrapper}>
          <Entypo name="lock" size={24} color="black" />
          <TextInput
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            style={styles.input}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Entypo
              name={passwordVisible ? "eye" : "eye-with-line"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrapper}>
          <Entypo name="lock" size={24} color="black" />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={!confirmPasswordVisible}
            style={styles.input}
          />
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
            <Entypo
              name={confirmPasswordVisible ? "eye" : "eye-with-line"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.googleLoginText}>Sign Up with Google</Text>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine}></View>
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.separatorLine}></View>
      </View>

      <View style={{ marginVertical: 20, flexDirection: "row", alignItems: "center" }}>
        <Text style={{ letterSpacing: 0.5 }}>Already have an account?</Text>
        <TouchableOpacity onPress={signUpHandler} style={{ padding: 10 }}>
          <Text style={{ color: "#3797EF" }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  inputContainer: {
    width: "100%",
    gap: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#A9A9A9",
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: "#3797EF",
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  googleLoginText: {
    textAlign: "center",
    color: "#3797EF",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#A9A9A9",
  },
  separatorText: {
    marginHorizontal: 10,
    color: "#A9A9A9",
    fontWeight: "bold",
  },
});

export default Index;
