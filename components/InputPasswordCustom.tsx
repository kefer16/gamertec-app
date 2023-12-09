import { Dispatch, SetStateAction, useState } from "react";
import {
   View,
   Text,
   TextInput,
   StyleProp,
   ViewStyle,
   useColorScheme,
   TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/Colors";

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
   const colorScheme = useColorScheme();
   const [focus, setfocus] = useState<boolean>(false);
   const onFocus = () => {
      setfocus(true);
   };
   const onBlur = () => {
      setfocus(false);
   };
   return (
      <View
         style={[
            {
               width: "100%",
               padding: 10,
               paddingTop: 10,
               borderRadius: 5,
               backgroundColor: Colors[colorScheme ?? "light"].inputContainer,
               elevation: 5,
               animationDuration: "1s",
               borderStyle: "solid",
               borderWidth: 2,
               borderColor: Colors[colorScheme ?? "light"].inputContainer,
            },
            focus && {
               borderColor: "#007bff",
            },
         ]}
      >
         <Text
            style={[
               {
                  width: "100%",
                  fontSize: 11,
                  lineHeight: 13,
                  textAlign: "left",
                  color: Colors[colorScheme ?? "light"].inputTitle,
                  fontFamily: "Poppins500",
               },
               focus && {
                  color: "#007bff",
               },
            ]}
         >
            {title}
         </Text>
         <TextInput
            placeholderTextColor={
               Colors[colorScheme ?? "light"].InputTextPlaceHolder
            }
            style={[
               {
                  display: "flex",
                  width: "100%",
                  fontSize: 15,
                  lineHeight: 17,
                  color: Colors[colorScheme ?? "light"].inputText,
                  overflow: "hidden",
                  fontFamily: "Poppins300",
               },
            ]}
            value={value}
            placeholder={placeholder}
            onChangeText={functionChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            secureTextEntry={activePassword}
            autoComplete="off"
         />
         <TouchableOpacity
            style={{
               position: "absolute",
               top: 5,
               right: 10,
               zIndex: 1,
               width: 50,
               height: 50,
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               // backgroundColor: "red",
            }}
            onPress={functionActivePassword}
         >
            <Ionicons
               style={{ color: Colors[colorScheme ?? "light"].inputTitle }}
               name={activePassword ? "eye-outline" : "eye-off-outline"}
               size={20}
            />
         </TouchableOpacity>
      </View>
   );
}
