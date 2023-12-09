import { Dispatch, SetStateAction, useState } from "react";
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
            editable={inputIsEditable}
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
                  fontFamily: "Poppins300",
               },
               styleInput,
            ]}
            value={value}
            placeholder={placeholder}
            onChangeText={functionChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            keyboardType={keyboardType}
            maxLength={maxLength}
         />
      </View>
   );
}
