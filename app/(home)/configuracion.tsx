import { Text, View } from "../../components/Themed";
import { TouchableOpacity, useColorScheme, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ButtonOptionCustom from "../../components/ButtonOptionCustom";
import { router } from "expo-router";
import { useContext, useEffect } from "react";
import { GamertecSesionContext } from "../../components/sesion/Sesion.component";
import Colors from "../../constants/Colors";

export default function Configuracion() {
   const { obtenerSesion, sesionGamertec, cerrarSesion } = useContext(
      GamertecSesionContext
   );

   const colorScheme = useColorScheme();

   useEffect(() => {
      obtenerSesion();
   }, []);

   const funCerrarSesion = () => {
      cerrarSesion();
      router.replace("/");
   };
   return (
      <View style={{ flex: 1 }}>
         <View
            style={{
               // height: 120,
               paddingHorizontal: 20,
               paddingTop: 40,
               paddingBottom: 15,
               backgroundColor: Colors[colorScheme ?? "light"].containerHeader,
               borderBottomEndRadius: 20,
               borderBottomStartRadius: 20,
            }}
         >
            <Image
               style={{ width: 25, height: 25, alignSelf: "flex-start" }}
               source={require("../../assets/images/image/favicon-gamertec.png")}
            />
            <Text
               style={{
                  marginTop: 10,
                  fontSize: 20,
                  color: "#fff",
                  lineHeight: 24,
                  fontFamily: "Poppins600",
                  // backgroundColor: "red",
               }}
            >
               Configuración
            </Text>
         </View>

         <View style={{ padding: 15, paddingVertical: 20, gap: 7 }}>
            <ButtonOptionCustom
               iconName={"person-circle"}
               textTitle="Perfil"
               textDescription={sesionGamertec.usuario}
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
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  // marginTop: 20,
               }}
               onPress={funCerrarSesion}
            >
               <Ionicons
                  style={{ marginRight: 10, fontSize: 25, color: "red" }}
                  name={"log-out"}
               />
               <Text
                  style={{
                     fontSize: 15,
                     fontFamily: "Poppins400",
                     color: "red",
                  }}
               >
                  Cerrar Sesión
               </Text>
            </TouchableOpacity>
            <Text
               style={{
                  // marginTop: ,
                  fontSize: 10,
                  fontFamily: "Poppins300",
                  color: "#6f6f6f",
               }}
            >
               Version 1.0.1
            </Text>
         </View>
      </View>
   );
}
