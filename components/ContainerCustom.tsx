import { ScrollView, View, useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import Constants from "expo-constants";

const ContainerCustom = (props: any) => {
   const colorScheme = useColorScheme();

   return (
      <View
         style={{
            flex: 1,
            paddingTop: Constants.statusBarHeight,
            backgroundColor: Colors[colorScheme ?? "light"].container,
         }}
      >
         <ScrollView style={{ flex: 1 }}>{props.children}</ScrollView>
      </View>
   );
};

export default ContainerCustom;
