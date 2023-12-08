import { View, Text } from "react-native";
import {
   TouchableOpacity,
   useColorScheme,
   Image,
   ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ButtonOptionCustom from "../../../components/ButtonOptionCustom";
import { router } from "expo-router";
import { useContext, useEffect } from "react";
import { GamertecSesionContext } from "../../../components/sesion/Sesion.component";
import Colors from "../../../constants/Colors";

const index = () => {
   const { obtenerSesion, cerrarSesion } = useContext(GamertecSesionContext);

   const colorScheme = useColorScheme();

   useEffect(() => {
      obtenerSesion();
   }, []);

   const funCerrarSesion = () => {
      cerrarSesion();
      router.replace("/");
   };

   const funIrScreenUsuario = () => {
      router.push("/(home)/configuracion/perfil");
   };

   return (
      <View
         style={{
            flex: 1,
            backgroundColor: Colors[colorScheme ?? "light"].container,
         }}
      >
         <View
            style={{
               // height: 120,
               paddingHorizontal: 20,
               paddingTop: 40,
               paddingBottom: 15,
               backgroundColor: Colors[colorScheme ?? "light"].containerHeader,
               borderBottomEndRadius: 30,
               borderBottomStartRadius: 30,
            }}
         >
            <Image
               style={{ width: 25, height: 25, alignSelf: "flex-start" }}
               source={require("../../../assets/images/image/favicon-gamertec.png")}
            />
            <Text
               style={{
                  marginTop: 10,
                  fontSize: 23,
                  color: "#fff",
                  lineHeight: 28,
                  fontFamily: "Poppins700",
                  // backgroundColor: "red",
               }}
            >
               Configuración
            </Text>
         </View>
         <ScrollView>
            <View style={{ padding: 15, paddingVertical: 20, gap: 7 }}>
               <ButtonOptionCustom
                  iconName={"person-circle"}
                  textTitle="Perfil"
                  textDescription={"Editar perfil"}
                  onPress={funIrScreenUsuario}
               />

               <ButtonOptionCustom
                  iconName={"lock-closed"}
                  textTitle="Contraseña"
                  textDescription="Cambiar Contraseña"
               />

               <ButtonOptionCustom
                  iconName={"cart"}
                  textTitle="Carrito"
                  textDescription="Gestionar carrito de compras"
               />

               <ButtonOptionCustom
                  iconName={"wallet"}
                  textTitle="Compras"
                  textDescription="Gestionar compras"
               />

               <ButtonOptionCustom
                  iconName={"notifications"}
                  textTitle="Notificaciones"
                  textDescription="Gestionar Notificaciones"
               />

               <ButtonOptionCustom
                  iconName={"contrast"}
                  textTitle="Tema"
                  textDescription="Configurar Tema de la aplicación"
               />

               <ButtonOptionCustom
                  iconName={"call"}
                  textTitle="Soporte al cliente"
                  textDescription="Contactar con personal de ayuda"
               />

               <TouchableOpacity
                  style={{
                     padding: 15,
                     display: "flex",
                     flexDirection: "row",
                     alignItems: "center",
                     borderRadius: 10,
                     backgroundColor: Colors[colorScheme ?? "light"].card,
                  }}
                  onPress={funCerrarSesion}
               >
                  <Ionicons
                     style={{ marginRight: 10, fontSize: 25, color: "#EC3030" }}
                     name={"log-out"}
                  />
                  <Text
                     style={{
                        fontSize: 15,
                        fontFamily: "Poppins400",
                        color: "#EC3030",
                     }}
                  >
                     Cerrar Sesión
                  </Text>
               </TouchableOpacity>
               <Text
                  style={{
                     padding: 15,
                     fontSize: 10,
                     fontFamily: "Poppins300",
                     color: "#6f6f6f",
                  }}
               >
                  Version 1.0.1
               </Text>
            </View>
         </ScrollView>
      </View>
   );
};

export default index;
