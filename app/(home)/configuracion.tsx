import { Text, View } from "../../components/Themed";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ButtonOptionCustom from "../../components/ButtonOptionCustom";
import { router } from "expo-router";
import { useContext, useEffect } from "react";
import { GamertecSesionContext } from "../../components/sesion/Sesion.component";

export default function Configuracion() {
   const { obtenerSesion, sesionGamertec, cerrarSesion } = useContext(
      GamertecSesionContext
   );

   useEffect(() => {
      obtenerSesion();
   }, []);

   const funCerrarSesion = () => {
      cerrarSesion();
      router.replace("/");
   };
   return (
      <View style={{ flex: 1 }}>
         <View style={styles.gradientContainer}>
            <Image
               style={styles.logo}
               source={require("../../assets/images/image/favicon-gamertec.png")}
            />
            <Text style={styles.title}>Configuración</Text>
         </View>

         <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <ButtonOptionCustom
               iconName={"person-circle"}
               textTitle="Perfil"
               textDescription={sesionGamertec.usuario}
            />

            <View
               style={styles.separator}
               lightColor="#eee"
               darkColor="rgba(255,255,255,0.1)"
            />
            <ButtonOptionCustom
               iconName={"lock-closed"}
               textTitle="Contraseña"
               textDescription="Cambiar Contraseña"
            />

            <View
               style={styles.separator}
               lightColor="#eee"
               darkColor="rgba(255,255,255,0.1)"
            />
            <ButtonOptionCustom
               iconName={"cart"}
               textTitle="Carrito"
               textDescription="Gestionar carrito de compras"
            />
            <View
               style={styles.separator}
               lightColor="#eee"
               darkColor="rgba(255,255,255,0.1)"
            />
            <ButtonOptionCustom
               iconName={"wallet"}
               textTitle="Compras"
               textDescription="Gestionar compras"
            />
            <View
               style={styles.separator}
               lightColor="#eee"
               darkColor="rgba(255,255,255,0.1)"
            />

            <ButtonOptionCustom
               iconName={"notifications"}
               textTitle="Notificaciones"
               textDescription="Gestionar Notificaciones"
            />
            <View
               style={styles.separator}
               lightColor="#eee"
               darkColor="rgba(255,255,255,0.1)"
            />
            <ButtonOptionCustom
               iconName={"contrast"}
               textTitle="Tema"
               textDescription="Configurar Tema de la aplicación"
            />
            <View
               style={styles.separator}
               lightColor="#eee"
               darkColor="rgba(255,255,255,0.1)"
            />
            <ButtonOptionCustom
               iconName={"call"}
               textTitle="Soporte al cliente"
               textDescription="Contactar con personal de ayuda"
            />
            <View
               style={styles.separator}
               lightColor="#eee"
               darkColor="rgba(255,255,255,0.1)"
            />
            <TouchableOpacity
               style={{
                  paddingVertical: 15,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 30,
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

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
   logo: {
      width: 30,
      height: 30,
      alignSelf: "flex-start",
   },
   gradientContainer: {
      height: 130,
      paddingHorizontal: 20,
      paddingTop: 40,
      backgroundColor: "#33105d",
   },
   title: {
      marginTop: 10,
      fontSize: 20,
      color: "#fff",
      fontFamily: "Poppins600",
   },
   separator: {
      height: 1,
      width: "100%",
   },
});
