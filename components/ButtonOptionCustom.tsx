import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
   iconName?: any;
   textTitle: string;
   textDescription: string;
}
export default function ButtonOptionCustom({
   iconName,
   textTitle,
   textDescription,
}: Props) {
   return (
      <TouchableOpacity
         style={{
            paddingVertical: 15,
            paddingHorizontal: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
         }}
      >
         <Ionicons
            style={{ marginRight: 10, color: "#33105d" }}
            size={23}
            name={iconName}
         />
         <View>
            <Text
               style={{
                  fontSize: 12,
                  fontFamily: "Poppins600",
                  lineHeight: 15,
                  color: "#000",
               }}
            >
               {textTitle}
            </Text>
            <Text
               style={{
                  fontSize: 9,
                  fontFamily: "Poppins300",
                  color: "#6f6f6f",
               }}
            >
               {textDescription}
            </Text>
         </View>

         <Ionicons
            style={{
               marginLeft: "auto",
               fontSize: 20,
               color: "#bbb",
            }}
            name={"arrow-forward"}
         />
      </TouchableOpacity>
   );
}
