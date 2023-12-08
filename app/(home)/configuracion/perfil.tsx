import { Image, ScrollView, Text, View, useColorScheme } from "react-native";
import InputTextCustom from "../../../components/InputTextCustom";
import { useState } from "react";
import Colors from "../../../constants/Colors";

const user = () => {
   const colorScheme = useColorScheme();
   const [nombre, setNombre] = useState<string>("");
   const [apellido, setApellido] = useState<string>("");
   const [telefono, setTelefono] = useState<string>("");
   const [direccion, setDireccion] = useState<string>("");
   const [correo, setCorreo] = useState<string>("");
   const [usuario] = useState<string>("Kefer");
   const [privilegio] = useState<string>("Usuario");
   return (
      <View
         style={{
            flex: 1,
            backgroundColor: Colors[colorScheme ?? "light"].containerHeader,
         }}
      >
         <View
            style={{
               marginTop: 50,
               zIndex: 99,
            }}
         >
            <View
               style={{
                  position: "absolute",
                  bottom: -70,
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
                     borderWidth: 5,
                     borderRadius: 50,
                  }}
                  source={require("../../../assets/images/image/favicon-gamertec.png")}
               />
               <Text
                  style={{
                     fontFamily: "Poppins700",
                     fontSize: 15,
                     lineHeight: 17,
                     color: Colors[colorScheme ?? "light"].textTitle,
                     marginTop: 2,
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
         </View>

         <View
            style={{
               flex: 1,
               paddingTop: 80,
               paddingBottom: 10,
               paddingHorizontal: 20,
               backgroundColor: Colors[colorScheme ?? "light"].container,
               borderTopLeftRadius: 30,
               borderTopRightRadius: 30,
               zIndex: 1,
            }}
         >
            <ScrollView>
               <View
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
               >
                  <InputTextCustom
                     title="Nombre"
                     keyboardType="email-address"
                     value={nombre}
                     functionChangeText={setNombre}
                     maxLength={45}
                     placeholder="Ingrese nombre"
                  />

                  <InputTextCustom
                     title="Apellido"
                     keyboardType="email-address"
                     value={apellido}
                     functionChangeText={setApellido}
                     maxLength={45}
                     placeholder="Ingrese apellido"
                  />
                  <InputTextCustom
                     inputIsEditable={false}
                     title="Teléfono"
                     keyboardType="email-address"
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
                     keyboardType="email-address"
                     value={direccion}
                     functionChangeText={setDireccion}
                     maxLength={45}
                     placeholder="Ingrese dirección"
                  />
               </View>
            </ScrollView>
         </View>
      </View>
   );
};

export default user;
