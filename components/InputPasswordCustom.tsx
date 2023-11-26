import React, { Dispatch, SetStateAction } from "react";
import {
   View,
   Text,
   TextInput,
   StyleSheet,
   StyleProp,
   ViewStyle,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
   title: string;
   placeholder: string;
   value: string;
   activePassword: boolean;
   functionChangeText: Dispatch<SetStateAction<string>>;
   functionActivePassword: () => void;
   style?: StyleProp<ViewStyle>;
}

export default function InputPasswordCustom({
   title,
   placeholder,
   value,
   activePassword,
   functionChangeText,
   functionActivePassword,
   style,
}: Props) {
   return (
      <View style={[styles.Container, style]}>
         <Text style={styles.TextLabel}>{title}</Text>
         <TextInput
            style={styles.TextInput}
            value={value}
            placeholder={placeholder}
            onChangeText={functionChangeText}
            secureTextEntry={activePassword}
            autoComplete="off"
         />
         <Ionicons
            style={styles.Icon}
            name={activePassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#8f7d7d"
            onPress={functionActivePassword}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   Container: {
      width: "100%",
   },
   TextLabel: {
      width: "100%",
      fontSize: 15,
      lineHeight: 20,
      textAlign: "left",
      marginBottom: 5,
      color: "#fff",
      fontFamily: "Poppins500",
   },
   TextInput: {
      display: "flex",
      width: "100%",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderStyle: "solid",
      borderColor: "#fff",
      backgroundColor: "#ffffff2d",
      color: "#fff",
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 10,
      overflow: "hidden",
      fontFamily: "Poppins300",
   },
   Icon: {
      position: "absolute",
      textAlign: "center",
      top: 40,
      right: 10,
      zIndex: 1,
      color: "#fff",
      width: 30,
      height: 25,
   },
});
