import {
   Text,
   TouchableOpacity,
   View,
   useColorScheme,
   StyleProp,
   TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
interface Props {
   styleTouchable?: StyleProp<TextStyle>;
   iconName?: any;
   textTitle: string;
   textDescription: string;
   onPress?: () => void;
}
export default function ButtonOptionCustom({
   styleTouchable,
   iconName,
   textTitle,
   textDescription,
   onPress,
}: Props) {
   const colorScheme = useColorScheme();
   return (
      <TouchableOpacity
         style={[
            styleTouchable,
            {
               padding: 15,
               display: "flex",
               flexDirection: "row",
               alignItems: "center",
               backgroundColor: Colors[colorScheme ?? "light"].card,
               borderRadius: 10,
               elevation: 5,
            },
         ]}
         onPress={onPress}
      >
         <Ionicons
            style={{
               marginRight: 10,
               color: Colors[colorScheme ?? "light"].iconPrimary,
            }}
            size={25}
            name={iconName}
         />
         <View>
            <Text
               style={{
                  fontSize: 15,
                  fontFamily: "Poppins600",
                  lineHeight: 20,
                  color: Colors[colorScheme ?? "light"].textTitle,
               }}
            >
               {textTitle}
            </Text>
            <Text
               style={{
                  fontSize: 11,
                  fontFamily: "Poppins300",
                  color: Colors[colorScheme ?? "light"].textSubtitle,
               }}
            >
               {textDescription}
            </Text>
         </View>

         <Ionicons
            style={{
               marginLeft: "auto",
               color: Colors[colorScheme ?? "light"].iconSecondary,
            }}
            size={25}
            name={"arrow-forward"}
         />
      </TouchableOpacity>
   );
}
