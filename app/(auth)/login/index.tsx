import React, { useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TextInputProps,
} from "react-native";
import instagramText from "@/assets/images/ui/instagram-text-icon.png";
import { useRouter } from "expo-router";

// Define props for InputField component
interface InputFieldProps extends TextInputProps {
  icon?: keyof typeof AntDesign.glyphMap;
  iconWithLine?: keyof typeof Entypo.glyphMap;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  secureTextEntry = false,
  icon,
  iconWithLine,
  ...props
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecure}
        style={styles.input}
        {...props}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => setIsSecure(!isSecure)}
        >
          {isSecure ? (
            <Entypo name={iconWithLine} size={24} color="black" />
          ) : (
            <AntDesign name={icon} size={24} color="black" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const Index: React.FC = () => {
  const router = useRouter();
  const signUpHandler = () => {
    router.navigate("/register");
  };

  return (
    <View style={styles.container}>
      <Image source={instagramText} style={styles.image} />
      <View style={styles.inputContainer}>
        <InputField
          placeholder="Username or email-address"
          keyboardType="email-address"
        />
        <InputField
          placeholder="Password"
          secureTextEntry={true}
          icon="eye"
          iconWithLine="eye-with-line"
        />
        <TouchableOpacity style={styles.forgetPasswordButton}>
          <Text style={styles.forgetPasswordText}>Forget Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={()=>{
            router.navigate("/home")
        }}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.googleLoginText}>Login with Google</Text>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine}></View>
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.separatorLine}></View>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity onPress={signUpHandler} style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
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
  },
  iconWrapper: {
    marginLeft: 10,
  },
  forgetPasswordButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  forgetPasswordText: {
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
    color: "#3797EF",
  },
  loginButton: {
    backgroundColor: "#3797EF",
    padding: 16,
    borderRadius: 10,
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
  signUpContainer: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  signUpText: {
    letterSpacing: 0.5,
  },
  signUpButton: {
    padding: 10,
  },
  signUpButtonText: {
    color: "#3797EF",
  },
});

export default Index;
