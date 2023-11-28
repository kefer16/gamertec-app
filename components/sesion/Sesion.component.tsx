import { createContext, useState } from "react";
import { LogeoUsuario } from "../../interfaces/usuario.interface";
import { ToastAndroid } from "react-native";
import * as SecureStore from "expo-secure-store";

export interface NotificacionProps {
   tipo: "success" | "info" | "warn" | "error" | undefined;
   detalle: string;
}
export interface SesionGamertecContextProps {
   sesionGamertec: LogeoUsuario;
   privilegio: privilegio;
   obtenerSesion: () => void;
   cerrarSesion: () => void;
   mostrarNotificacion: (prosp: NotificacionProps) => void;
}

export const GamertecSesionContext = createContext<SesionGamertecContextProps>(
   {} as SesionGamertecContextProps
);
export type privilegio = "ADM" | "USU" | "INV";

export const SesionProvider = ({ children }: any) => {
   const [privilegio, setPrivilegio] = useState<privilegio>("INV");
   const [sesionGamertec, setSesionGamertec] = useState<LogeoUsuario>(
      {} as LogeoUsuario
   );

   const obtenerSesion = async () => {
      const result = await SecureStore.getItemAsync("sesion_gamertec");
      if (result) {
         setSesionGamertec(JSON.parse(result));
         setPrivilegio(JSON.parse(result).cls_privilegio.abreviatura);
      } else {
         console.log("No se obtuvo la llave");
      }
   };

   const cerrarSesion = () => {
      SecureStore.deleteItemAsync("sesion_gamertec");
      setSesionGamertec({
         usuario_id: 0,
         usuario: "",
         correo: "",
         nombre: "",
         apellido: "",
         direccion: "",
         telefono: "",
         cls_privilegio: {
            privilegio_id: 0,
            tipo: "",
            abreviatura: "INV",
         },
      });
      setPrivilegio("INV");
   };

   const mostrarNotificacion = ({ tipo, detalle }: NotificacionProps) => {
      let titulo = "";
      let pegado = false;

      if (detalle.substring(0, 6) === "[warn]") {
         tipo = "warn";
         detalle = detalle.substring(6);
      }

      if (tipo === "error") {
         titulo = "Error";
         pegado = true;
      }
      if (tipo === "warn") {
         titulo = "Alerta";
         pegado = false;
      }
      if (tipo === "success") {
         titulo = "Éxito";
         pegado = false;
      }
      console.log(titulo, pegado);

      ToastAndroid.showWithGravityAndOffset(
         detalle,
         ToastAndroid.LONG,
         ToastAndroid.TOP,
         25,
         50
      );
   };

   return (
      <GamertecSesionContext.Provider
         value={{
            sesionGamertec,
            privilegio,
            obtenerSesion,
            cerrarSesion,
            mostrarNotificacion,
         }}
      >
         {children}
      </GamertecSesionContext.Provider>
   );
};
