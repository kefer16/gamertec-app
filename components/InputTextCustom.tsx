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
               paddingHorizontal: 10,
               paddingTop: 10,
               borderRadius: 5,
               backgroundColor: Colors[colorScheme ?? "light"].card,
               borderStyle: "solid",
               borderBottomWidth: 2,
               borderBlockColor: Colors[colorScheme ?? "light"].inputText,
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
                  color: Colors[colorScheme ?? "light"].inputText,
                  overflow: "hidden",
                  fontFamily: "Poppins300",
                  borderRadius: 5,
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
