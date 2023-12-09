import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import {
   Pressable,
   useColorScheme,
   View,
   Text,
   StyleSheet,
} from "react-native";
import Colors from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect } from "react";

export default function TabLayout() {
   const colorScheme = useColorScheme();

   useEffect(() => {}, []);

   return (
      <Tabs
         screenOptions={{
            tabBarActiveTintColor:
               Colors[colorScheme ?? "light"].footerButtonHover,
            tabBarInactiveTintColor:
               Colors[colorScheme ?? "light"].footerButton,
            headerShown: false,
         }}
      >
         <Tabs.Screen
            name="index"
            options={{
               title: "",
               tabBarIcon: ({ color }) => (
                  <View style={styles.tabContainer}>
                     <Ionicons
                        style={styles.tabIcon}
                        name={"home"}
                        color={color}
                     />
                     <Text style={[styles.tabText, { color: `${color}` }]}>
                        Casa
                     </Text>
                  </View>
               ),
               headerRight: () => (
                  <Link href="/modal" asChild>
                     <Pressable>
                        {({ pressed }) => (
                           <FontAwesome
                              name="info-circle"
                              size={25}
                              color={Colors[colorScheme ?? "light"].text}
                              style={{
                                 marginRight: 15,
                                 opacity: pressed ? 0.5 : 1,
                              }}
                           />
                        )}
                     </Pressable>
                  </Link>
               ),
            }}
         />

         <Tabs.Screen
            name="two"
            options={{
               title: "",
               tabBarIcon: ({ color }) => (
                  <View style={styles.tabContainer}>
                     <Ionicons
                        style={styles.tabIcon}
                        name={"search"}
                        color={color}
                     />
                     <Text style={[styles.tabText, { color: `${color}` }]}>
                        Búsqueda
                     </Text>
                  </View>
               ),
            }}
         />
         <Tabs.Screen
            name="configuracion"
            options={{
               title: "",
               tabBarIcon: ({ color }) => (
                  <View style={styles.tabContainer}>
                     <Ionicons
                        style={styles.tabIcon}
                        name={"settings"}
                        color={color}
                     />
                     <Text style={[styles.tabText, { color: `${color}` }]}>
                        Configuración
                     </Text>
                  </View>
               ),
            }}
         />
      </Tabs>
   );
}

const styles = StyleSheet.create({
   tabContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
   },
   tabIcon: {
      marginTop: 15,
      fontSize: 18,
   },
   tabText: {
      marginTop: 2,
      fontSize: 9,
      fontFamily: "Poppins400",
   },
});
