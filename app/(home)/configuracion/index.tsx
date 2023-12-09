import { View, Text } from "react-native";
import { TouchableOpacity, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ButtonOptionCustom from "../../../components/ButtonOptionCustom";
import { router } from "expo-router";
import { useContext, useEffect } from "react";
import { GamertecSesionContext } from "../../../components/sesion/Sesion.component";
import Colors from "../../../constants/Colors";
import ContainerCustom from "../../../components/ContainerCustom";
import HeaderCustom from "../../../components/HeaderCustom";

const index = () => {
   const { cerrarSesion } = useContext(GamertecSesionContext);

   const colorScheme = useColorScheme();

   useEffect(() => {}, []);

   const funCerrarSesion = () => {
      cerrarSesion();
      router.replace("/");
   };

   const funIrScreenUsuario = () => {
      router.push("/(home)/configuracion/perfil");
   };

   return (
      <ContainerCustom>
         <HeaderCustom title="Configuración" isSecondaryPage={false} />

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
                  shadowColor: "#51006a92",
                  shadowOffset: { width: -2, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 20,
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
      </ContainerCustom>
   );
};

export default index;
