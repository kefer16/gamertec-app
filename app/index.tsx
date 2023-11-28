import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import InputTextCustom from "../components/InputTextCustom";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useContext } from "react";
import InputPasswordCustom from "../components/InputPasswordCustom";
import { Link } from "expo-router";
import { UsuarioService } from "../services/usuario.service";
import { LogeoUsuario } from "../interfaces/usuario.interface";
import { router } from "expo-router";
import { GamertecSesionContext } from "../components/sesion/Sesion.component";
import { GuadarSession } from "../utils/funciones.util";

export default function LoginScreen() {
   const { mostrarNotificacion } = useContext(GamertecSesionContext);
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
            const resp2: LogeoUsuario = {
               usuario_id: resp.usuario_id,
               nombre: resp.nombre,
               apellido: resp.apellido,
               correo: resp.correo,
               usuario: resp.usuario,
               direccion: resp.direccion,
               telefono: resp.telefono,
               cls_privilegio: {
                  privilegio_id: resp.cls_privilegio.privilegio_id,
                  abreviatura: resp.cls_privilegio.abreviatura,
                  tipo: resp.cls_privilegio.tipo,
               },
            };
            console.log(resp2);

            GuadarSession(resp2);
            router.replace("/(home)");
         })
         .catch((error: Error) => {
            console.log(error);

            mostrarNotificacion({ tipo: "error", detalle: error.message });
         });
   };
   return (
      <View style={{ flex: 1 }}>
         <LinearGradient
            colors={["#C2A2F9", "#93ACF9"]}
            style={styles.gradientContainer}
         >
            <Image
               style={styles.logo}
               source={require("../assets/images/image/favicon-gamertec.png")}
            />
            <Text style={styles.titulo}>Bienvenido,</Text>
            <Text style={styles.tituloLigero}>a Gamertec</Text>

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

            <Text style={styles.olvido}>Has olvidado tu contraseña?</Text>
            <TouchableOpacity style={styles.button} onPress={funIniciarSesion}>
               <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
               <Text style={styles.noCuenta}>Aun no tienes cuenta?</Text>
               <Link href="/registro" style={styles.noCuentaRegistrate}>
                  <Text>Regístrate</Text>
               </Link>
            </View>
         </LinearGradient>
      </View>
   );
}

const styles = StyleSheet.create({
   gradientContainer: {
      flex: 1,
      paddingHorizontal: 40,
      paddingTop: 100,
   },
   logo: {
      width: 100,
      height: 100,
      marginBottom: 20,
      marginHorizontal: "auto",
      alignSelf: "center",
   },
   titulo: {
      fontSize: 30,
      color: "#fff",
      textAlign: "center",
      fontFamily: "Poppins800",
      lineHeight: 35,
   },
   tituloLigero: {
      fontSize: 30,
      marginBottom: 20,
      color: "#fff",
      textAlign: "center",
      fontFamily: "Poppins300",
      lineHeight: 35,
   },
   subtitulo: {
      width: "100%",
      fontSize: 15,
      lineHeight: 20,
      textAlign: "left",
      marginBottom: 5,
      color: "#fff",
      fontFamily: "Poppins500",
   },
   button: {
      marginTop: 10,
      width: "100%",
      paddingVertical: 15,
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: "#fff",
   },
   buttonText: {
      textAlign: "center",
      color: "#000",
      fontSize: 16,
      fontFamily: "Poppins700",
   },
   olvido: {
      width: "100%",
      textAlign: "right",
      color: "#fff",
      fontSize: 13,
      fontFamily: "Poppins400",
      textDecorationLine: "underline",
   },
   footer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      color: "#fff",
      justifyContent: "center",
      marginTop: 20,
   },
   noCuenta: {
      color: "#fff",
      fontSize: 13,
      fontFamily: "Poppins400",
   },
   noCuentaRegistrate: {
      color: "#fff",
      marginLeft: 10,
      fontSize: 13,
      fontFamily: "Poppins400",
      textDecorationLine: "underline",
   },
});
