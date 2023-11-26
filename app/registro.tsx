import { useEffect, useState } from "react";
import {
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import InputTextCustom from "../components/InputTextCustom";
import InputPasswordCustom from "../components/InputPasswordCustom";
import { Link } from "expo-router";

export default function RegistroScreen() {
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

   return (
      <View style={{ flex: 1 }}>
         <LinearGradient
            colors={["#C2A2F9", "#93ACF9"]}
            style={styles.gradientContainer}
         >
            <StatusBar style="auto" />

            <ScrollView style={styles.scroll}>
               <Text style={styles.titulo}>Crea una cuenta</Text>
               <Text style={styles.tituloLigero}>para comenzar ahora!</Text>

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
               <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Crea cuenta</Text>
               </TouchableOpacity>
               <View style={styles.footer}>
                  <Text style={styles.noCuenta}>Ya tienes una cuenta?</Text>
                  <Link href={"/"} style={styles.noCuentaRegistrate}>
                     <Text>Inicia Sesión</Text>
                  </Link>
               </View>
            </ScrollView>
         </LinearGradient>
      </View>
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
