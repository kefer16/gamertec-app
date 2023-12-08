import { Dispatch, SetStateAction } from "react";
import {
   View,
   Text,
   TextInput,
   StyleProp,
   ViewStyle,
   useColorScheme,
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
   return (
      <View
         style={[
            {
               width: "100%",
               paddingHorizontal: 10,
               paddingTop: 10,
               borderRadius: 5,
               backgroundColor: Colors[colorScheme ?? "light"].card,
               borderStyle: "solid",
               borderBottomWidth: 2,
               borderBlockColor: Colors[colorScheme ?? "light"].inputText,
            },
            style,
         ]}
      >
         <Text
            style={{
               width: "100%",
               fontSize: 10,
               lineHeight: 13,
               textAlign: "left",
               color: Colors[colorScheme ?? "light"].inputTitle,
               fontFamily: "Poppins500",
            }}
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
                  fontSize: 13,
                  color: Colors[colorScheme ?? "light"].inputText,
                  overflow: "hidden",
                  fontFamily: "Poppins300",
               },
            ]}
            value={value}
            placeholder={placeholder}
            onChangeText={functionChangeText}
            secureTextEntry={activePassword}
            autoComplete="off"
         />
         <Ionicons
            style={{
               position: "absolute",
               textAlign: "center",
               top: 20,
               right: 10,
               zIndex: 1,
               color: Colors[colorScheme ?? "light"].inputTitle,
               width: 30,
               height: 25,
            }}
            name={activePassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            onPress={functionActivePassword}
         />
      </View>
   );
}
