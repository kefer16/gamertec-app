import { Text, View, Image, useColorScheme } from "react-native";
import InputTextCustom from "../components/InputTextCustom";
import { useState, useContext } from "react";
import InputPasswordCustom from "../components/InputPasswordCustom";
import { Link } from "expo-router";
import { UsuarioService } from "../services/usuario.service";
import { LogeoUsuario } from "../interfaces/usuario.interface";
import { router } from "expo-router";
import { GamertecSesionContext } from "../components/sesion/Sesion.component";
import ContainerCustom from "../components/ContainerCustom";
import Colors from "../constants/Colors";
import ButtonCustom from "../components/ButtonCustom";

export default function LoginScreen() {
   const { mostrarNotificacion, guardarSesion } = useContext(
      GamertecSesionContext
   );

   const colorScheme = useColorScheme();

   const [usuario, setUsuario] = useState<string>("");
   const [esconderContrasenia, setEsconderContrasenia] =
      useState<boolean>(true);
   const [contrasenia, setContrasenia] = useState<string>("");

   const funIniciarSesion = async () => {
      if (!usuario) {
         mostrarNotificacion({ tipo: "success", detalle: "Ingrese usuario" });

         return;
      }
      if (!contrasenia) {
         mostrarNotificacion({
            tipo: "success",
            detalle: "Ingrese una contraseña",
         });

         return;
      }

      const srvUsuario = new UsuarioService();
      await srvUsuario
         .logearse(usuario, contrasenia)
         .then((resp: LogeoUsuario) => {
            mostrarNotificacion({
               tipo: "success",
               detalle: `Hola Bienvenido ${resp.usuario}`,
            });

            guardarSesion(resp);
            router.replace("/(home)");
         })
         .catch((error: Error) => {
            console.log(error);

            mostrarNotificacion({ tipo: "error", detalle: error.message });
         });
   };
   return (
      <ContainerCustom>
         <Image
            style={{
               marginTop: 80,
               width: 100,
               height: 100,
               marginBottom: 20,
               marginHorizontal: "auto",
               alignSelf: "center",
            }}
            source={require("../assets/images/image/favicon-gamertec.png")}
         />

         <Text
            style={{
               fontSize: 30,
               lineHeight: 36,
               color: Colors[colorScheme ?? "light"].textTitle,
               textAlign: "center",
               fontFamily: "Poppins900",
            }}
         >
            Bienvenido,
         </Text>
         <Text
            style={{
               fontSize: 20,
               lineHeight: 22,
               color: Colors[colorScheme ?? "light"].textSubtitle,
               textAlign: "center",
               fontFamily: "Poppins400",
               marginBottom: 50,
            }}
         >
            a Gamertec
         </Text>

         <View
            style={{
               flex: 1,
               flexDirection: "column",
               paddingHorizontal: 20,
               gap: 10,
            }}
         >
            <InputTextCustom
               styleInput={{ textTransform: "lowercase" }}
               title="Usuario"
               placeholder="Ingrese usuario"
               value={usuario}
               functionChangeText={setUsuario}
               keyboardType="email-address"
               maxLength={15}
            />

            <InputPasswordCustom
               title="Contraseña"
               placeholder="Ingrese contraseña"
               value={contrasenia}
               functionChangeText={setContrasenia}
               activePassword={esconderContrasenia}
               functionActivePassword={() =>
                  setEsconderContrasenia(!esconderContrasenia)
               }
            />

            <Text
               style={{
                  width: "100%",
                  textAlign: "right",
                  color: Colors[colorScheme ?? "light"].text,
                  fontSize: 13,
                  fontFamily: "Poppins400",
                  textDecorationLine: "underline",
                  marginBottom: 10,
               }}
            >
               Has olvidado tu contraseña?
            </Text>
            <ButtonCustom text="Iniciar Sesión" onPress={funIniciarSesion} />

            <View
               style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 20,
               }}
            >
               <Text
                  style={{
                     color: Colors[colorScheme ?? "light"].text,
                     fontSize: 13,
                     fontFamily: "Poppins400",
                  }}
               >
                  Aun no tienes cuenta?
               </Text>
               <Link
                  href="/registro"
                  style={{
                     color: Colors[colorScheme ?? "light"].text,
                     marginLeft: 10,
                     fontSize: 13,
                     fontFamily: "Poppins400",
                     textDecorationLine: "underline",
                  }}
               >
                  <Text>Regístrate</Text>
               </Link>
            </View>
         </View>
      </ContainerCustom>
   );
}
