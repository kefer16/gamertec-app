import { ScrollView, View, useColorScheme } from "react-native";
import Colors from "../constants/Colors";

const ContainerCustom = (props: any) => {
   const colorScheme = useColorScheme();
   return (
      <View
         style={{
            flex: 1,
            backgroundColor: Colors[colorScheme ?? "light"].container,
         }}
      >
         <ScrollView style={{ flex: 1 }}>{props.children}</ScrollView>
      </View>
   );
};

export default ContainerCustom;
