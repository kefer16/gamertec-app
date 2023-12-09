import { Image, Text, View, useColorScheme } from "react-native";
import InputTextCustom from "../../../components/InputTextCustom";
import { useContext, useEffect, useState } from "react";
import Colors from "../../../constants/Colors";
import HeaderCustom from "../../../components/HeaderCustom";
import ContainerCustom from "../../../components/ContainerCustom";
import { GamertecSesionContext } from "../../../components/sesion/Sesion.component";
import ButtonCustom from "../../../components/ButtonCustom";

const user = () => {
   const colorScheme = useColorScheme();
   const { sesionGamertec, obtenerSesion } = useContext(GamertecSesionContext);
   const [nombre, setNombre] = useState<string>("");
   const [apellido, setApellido] = useState<string>("");
   const [telefono, setTelefono] = useState<string>("");
   const [direccion, setDireccion] = useState<string>("");
   const [correo, setCorreo] = useState<string>("");
   const [usuario, setUsuario] = useState<string>("");
   const [privilegio, setPrivilegio] = useState<string>("");

   const funActualizarPerfil = () => {};

   useEffect(() => {
      obtenerSesion();
      setNombre(sesionGamertec.nombre);
      setApellido(sesionGamertec.apellido);
      setTelefono(sesionGamertec.telefono);
      setDireccion(sesionGamertec.direccion);
      setCorreo(sesionGamertec.correo);
      setUsuario(sesionGamertec.usuario);
      setPrivilegio(
         sesionGamertec.cls_privilegio === undefined
            ? ""
            : sesionGamertec.cls_privilegio.tipo
      );
      console.log("seseion3", sesionGamertec);
   }, []);

   return (
      <ContainerCustom>
         <HeaderCustom
            title="Perfil"
            isSecondaryPage={true}
            urlBack={"/(home)/configuracion"}
         />

         <View
            style={{
               marginVertical: 20,
               width: "100%",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
            }}
         >
            <Image
               style={{
                  width: 70,
                  height: 70,
                  borderColor: Colors[colorScheme ?? "light"].card,
                  objectFit: "scale-down",
                  // borderWidth: 5,
                  //  borderRadius: 50,
               }}
               source={require("../../../assets/images/image/favicon-gamertec.png")}
            />
            <Text
               style={{
                  marginTop: 10,
                  fontFamily: "Poppins700",
                  fontSize: 20,
                  lineHeight: 22,
                  color: Colors[colorScheme ?? "light"].textTitle,
               }}
            >
               {usuario}
            </Text>
            <Text
               style={{
                  fontFamily: "Poppins300",
                  fontSize: 10,
                  lineHeight: 13,
                  color: Colors[colorScheme ?? "light"].textSubtitle,
                  marginTop: 2,
               }}
            >
               {privilegio}
            </Text>
         </View>

         <View
            style={{
               flex: 1,
               paddingBottom: 10,
               paddingHorizontal: 20,
               backgroundColor: Colors[colorScheme ?? "light"].container,
               borderTopLeftRadius: 30,
               borderTopRightRadius: 30,
               zIndex: 1,
            }}
         >
            <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
               <InputTextCustom
                  title="Nombre"
                  keyboardType="default"
                  value={nombre}
                  functionChangeText={setNombre}
                  maxLength={45}
                  placeholder="Ingrese nombre"
               />

               <InputTextCustom
                  title="Apellido"
                  keyboardType="default"
                  value={apellido}
                  functionChangeText={setApellido}
                  maxLength={45}
                  placeholder="Ingrese apellido"
               />
               <InputTextCustom
                  title="Teléfono"
                  keyboardType="phone-pad"
                  value={telefono}
                  functionChangeText={setTelefono}
                  maxLength={45}
                  placeholder="Ingrese teléfono"
               />
               <InputTextCustom
                  title="Correo"
                  keyboardType="email-address"
                  value={correo}
                  functionChangeText={setCorreo}
                  maxLength={45}
                  placeholder="Ingrese correo"
               />
               <InputTextCustom
                  title="Direccion"
                  keyboardType="default"
                  value={direccion}
                  functionChangeText={setDireccion}
                  maxLength={45}
                  placeholder="Ingrese dirección"
               />
            </View>
            <ButtonCustom text="Actualizar" onPress={funActualizarPerfil} />
         </View>
      </ContainerCustom>
   );
};

export default user;
