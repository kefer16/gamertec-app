import { useState } from "react";
import {
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   Alert,
   useColorScheme,
} from "react-native";
import InputTextCustom from "../components/InputTextCustom";
import InputPasswordCustom from "../components/InputPasswordCustom";
import { Link } from "expo-router";
import { UsuarioService } from "../services/usuario.service";
import { UsuarioEntity } from "../entities/usuario.entity";
import { crearFechaISO } from "../utils/funciones.util";
import ContainerCustom from "../components/ContainerCustom";
import Colors from "../constants/Colors";

export default function RegistroScreen() {
   const colorScheme = useColorScheme();

   const [nombre, setNombre] = useState<string>("");
   const [apellido, setApellido] = useState<string>("");
   const [correo, setCorreo] = useState<string>("");
   const [usuario, setUsuario] = useState<string>("");
   const [contrasenia, setContrasenia] = useState<string>("");
   const [esconderContrasenia, setEsconderContrasenia] =
      useState<boolean>(true);
   const [repetirContrasenia, setRepetirContrasenia] = useState<string>("");
   const [esconderRepetirContrasenia, setEsconderRepetirContrasenia] =
      useState<boolean>(true);

   const funLimpiarFormulario = () => {
      setNombre("");
      setApellido("");
      setCorreo("");
      setUsuario("");
      setContrasenia("");
      setRepetirContrasenia("");
   };
   const funCrearCuenta = () => {
      if (!nombre) {
         Alert.alert("Ingrese un nombre");
         return;
      }
      if (!apellido) {
         Alert.alert("Ingrese un apellido");
         return;
      }
      if (!correo) {
         Alert.alert("Ingrese un correo");
         return;
      }

      if (!usuario) {
         Alert.alert("Ingrese un usuario");
         return;
      }

      if (!contrasenia) {
         Alert.alert("Ingrese una contraseña");
         return;
      }

      if (!repetirContrasenia) {
         Alert.alert("Repita su contraseña");
         return;
      }

      if (contrasenia !== repetirContrasenia) {
         Alert.alert("Las contraseñas deben ser iguales");
         return;
      }

      const data: UsuarioEntity = new UsuarioEntity(
         0,
         nombre,
         apellido,
         correo,
         usuario,
         contrasenia,
         "",
         crearFechaISO(),
         "",
         "",
         true,
         1
      );
      const srvUsuario = new UsuarioService();

      srvUsuario
         .registrar(data)
         .then(() => {
            Alert.alert(
               "Exito",
               "se creó la cuenta correctamente, ahora Inicia Sesión"
            );
            funLimpiarFormulario();
         })
         .catch((error: Error) => {
            Alert.alert("Error", error.message);
         });
   };

   return (
      <ContainerCustom>
         <View
            style={{
               flex: 1,

               backgroundColor: Colors[colorScheme ?? "light"].containerHeader,
               // borderBottomLeftRadius: 150,
               // borderBottomRightRadius: 150,
            }}
         >
            <Text style={styles.titulo}>Crea una cuenta</Text>
            <Text style={styles.tituloLigero}>para comenzar ahora!</Text>

            <View
               style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  marginHorizontal: 3,
                  gap: 10,
                  backgroundColor: Colors[colorScheme ?? "light"].card,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
               }}
            >
               <InputTextCustom
                  title="Nombre"
                  placeholder="Ingrese nombre"
                  value={nombre}
                  functionChangeText={setNombre}
                  keyboardType="default"
                  maxLength={45}
               />
               <InputTextCustom
                  title="Apellido"
                  placeholder="Ingrese apellido"
                  value={apellido}
                  functionChangeText={setApellido}
                  keyboardType="default"
                  maxLength={45}
               />
               <InputTextCustom
                  title="Correo"
                  placeholder="Ingrese correo"
                  value={correo}
                  functionChangeText={setCorreo}
                  keyboardType="default"
                  maxLength={30}
               />
               <InputTextCustom
                  title="Usuario"
                  placeholder="Ingrese usuario"
                  value={usuario}
                  functionChangeText={setUsuario}
                  keyboardType="default"
                  maxLength={30}
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
               <InputPasswordCustom
                  title="Repetir Contraseña"
                  placeholder="Ingrese otra vez la contraseña"
                  value={repetirContrasenia}
                  functionChangeText={setRepetirContrasenia}
                  activePassword={esconderRepetirContrasenia}
                  functionActivePassword={() =>
                     setEsconderRepetirContrasenia(!esconderRepetirContrasenia)
                  }
               />

               <TouchableOpacity style={styles.button} onPress={funCrearCuenta}>
                  <Text style={styles.buttonText}>Crea cuenta</Text>
               </TouchableOpacity>
               <View style={styles.footer}>
                  <Text style={styles.noCuenta}>Ya tienes una cuenta?</Text>
                  <Link href={"/"} style={styles.noCuentaRegistrate}>
                     <Text>Inicia Sesión</Text>
                  </Link>
               </View>
            </View>
         </View>
      </ContainerCustom>
   );
}

const styles = StyleSheet.create({
   gradientContainer: {
      flex: 1,
   },
   scroll: {
      paddingHorizontal: 30,
      paddingTop: 10,
   },
   titulo: {
      paddingTop: 50,
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
      fontFamily: "Poppins500",
      lineHeight: 35,
   },
   button: {
      marginTop: 10,
      width: "100%",
      paddingVertical: 15,
      borderRadius: 10,
      backgroundColor: "#fff",
   },
   buttonText: {
      textAlign: "center",
      color: "#000",
      fontSize: 16,
      fontFamily: "Poppins600",
   },
   footer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      color: "#fff",
      justifyContent: "center",
      marginVertical: 20,
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
