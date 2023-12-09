import { Dispatch, SetStateAction } from "react";
import {
   View,
   Text,
   TextInput,
   StyleProp,
   ViewStyle,
   KeyboardTypeOptions,
   TextStyle,
   useColorScheme,
} from "react-native";
import Colors from "../constants/Colors";
interface Props {
   title: string;
   placeholder: string;
   value: string;
   keyboardType: KeyboardTypeOptions;
   functionChangeText: Dispatch<SetStateAction<string>>;
   styleContainer?: StyleProp<ViewStyle>;
   styleInput?: StyleProp<TextStyle>;
   maxLength?: number;
   inputIsEditable?: boolean;
}
export default function InputTextCustom({
   title,
   placeholder,
   value,
   functionChangeText,
   styleContainer,
   styleInput,
   keyboardType,
   maxLength,
   inputIsEditable,
}: Props) {
   const colorScheme = useColorScheme();
   return (
      <View
         style={[
            {
               width: "100%",
               padding: 10,
               borderRadius: 5,
               backgroundColor: Colors[colorScheme ?? "light"].inputContainer,
               // borderStyle: "solid",
               // borderBottomWidth: 2,
               // borderBlockColor: "#51006a92",
               shadowColor: "#51006a92",
               shadowOffset: { width: -2, height: 4 },
               shadowOpacity: 0.2,
               shadowRadius: 3,
               elevation: 20,
            },
            styleContainer,
         ]}
      >
         <Text
            style={{
               width: "100%",
               fontSize: 10,
               lineHeight: 12,
               textAlign: "left",
               color: Colors[colorScheme ?? "light"].inputTitle,
               fontFamily: "Poppins500",
            }}
         >
            {title}
         </Text>
         <TextInput
            editable={inputIsEditable}
            placeholderTextColor={
               Colors[colorScheme ?? "light"].InputTextPlaceHolder
            }
            style={[
               {
                  display: "flex",
                  width: "100%",
                  fontSize: 13,
                  lineHeight: 15,
                  color: Colors[colorScheme ?? "light"].inputText,
                  // overflow: "hidden",
                  fontFamily: "Poppins300",
                  // borderRadius: 3,
                  // backgroundColor: "#00000015",
                  // borderColor: "#ffffff12",
                  // borderBottomWidth: 0.7,
               },
               styleInput,
            ]}
            value={value}
            placeholder={placeholder}
            onChangeText={functionChangeText}
            keyboardType={keyboardType}
            maxLength={maxLength}
         />
      </View>
   );
}
