import { Dispatch, SetStateAction } from "react";
import {
   View,
   Text,
   TextInput,
   StyleSheet,
   StyleProp,
   ViewStyle,
   KeyboardTypeOptions,
} from "react-native";
interface Props {
   title: string;
   placeholder: string;
   value: string;
   keyboardType: KeyboardTypeOptions;
   functionChangeText: Dispatch<SetStateAction<string>>;
   style?: StyleProp<ViewStyle>;
   maxLength?: number;
}
export default function InputTextCustom({
   title,
   placeholder,
   value,
   functionChangeText,
   style,
   keyboardType,
   maxLength,
}: Props) {
   return (
      <View style={[styles.Container, style]}>
         <Text style={styles.TextLabel}>{title}</Text>
         <TextInput
            style={styles.TextInput}
            value={value}
            placeholder={placeholder}
            onChangeText={functionChangeText}
            keyboardType={keyboardType}
            maxLength={maxLength}
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
});
