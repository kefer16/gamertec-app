import { StyleProp, Text, ViewStyle, useColorScheme } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

interface Props {
   styleButton?: StyleProp<ViewStyle>;
   text: string;
   onPress: () => void;
}
const ButtonCustom = ({ styleButton, text, onPress }: Props) => {
   const colorScheme = useColorScheme();
   return (
      <TouchableOpacity
         style={[
            {
               marginTop: 10,
               width: "100%",
               paddingVertical: 15,
               borderRadius: 10,
               backgroundColor: Colors[colorScheme ?? "light"].buttonContainer,
            },
            styleButton,
         ]}
         onPress={onPress}
      >
         <Text
            style={{
               textAlign: "center",
               color: Colors[colorScheme ?? "light"].buttonText,
               fontSize: 16,
               fontFamily: "Poppins600",
            }}
         >
            {text}
         </Text>
      </TouchableOpacity>
   );
};

export default ButtonCustom;
