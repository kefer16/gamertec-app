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
}
export default function ButtonOptionCustom({
   styleTouchable,
   iconName,
   textTitle,
   textDescription,
}: Props) {
   const colorScheme = useColorScheme();
   return (
      <TouchableOpacity
         style={[
            styleTouchable,
            {
               padding: 15,
               paddingHorizontal: 10,
               display: "flex",
               flexDirection: "row",
               alignItems: "center",
               backgroundColor: Colors[colorScheme ?? "light"].card,
               borderRadius: 10,
            },
         ]}
      >
         <Ionicons
            style={{
               marginRight: 10,
               color: Colors[colorScheme ?? "light"].iconPrimary,
            }}
            size={23}
            name={iconName}
         />
         <View>
            <Text
               style={{
                  fontSize: 12,
                  fontFamily: "Poppins600",
                  lineHeight: 15,
                  color: Colors[colorScheme ?? "light"].textTitle,
               }}
            >
               {textTitle}
            </Text>
            <Text
               style={{
                  fontSize: 9,
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
               fontSize: 20,
               color: Colors[colorScheme ?? "light"].iconSecondary,
            }}
            name={"arrow-forward"}
         />
      </TouchableOpacity>
   );
}
