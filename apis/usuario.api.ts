import axios, { AxiosResponse } from "axios";
import { UsuarioEntity } from "../entities/usuario.entity";
import { personalizarMensajeError } from "../utils/funciones.util";

export class UsuarioApi {
   async logearse(
      usuario: string,
      contrasenia: string
   ): Promise<AxiosResponse> {
      try {
         const config = {
            headers: {
               "Content-Type": "application/json",
            },
         };
         const body = JSON.stringify({ usuario, contrasenia });
         console.log(UsuarioEntity.url);

         return await axios.post(`${UsuarioEntity.url}/login`, body, config);
      } catch (error: any) {
         error.message = personalizarMensajeError(error);
         return Promise.reject(error);
      }
   }

   async registrar(data: UsuarioEntity): Promise<AxiosResponse> {
      try {
         const config = {
            headers: {
               "Content-Type": "application/json",
            },
         };
         const body = JSON.stringify(data);

         return await axios.post(
            `${UsuarioEntity.url}/registrar`,
            body,
            config
         );
      } catch (error: any) {
         error.message = personalizarMensajeError(error);
         return Promise.reject(error);
      }
   }

   async actualizar(ID: number, data: UsuarioEntity): Promise<AxiosResponse> {
      try {
         const config = {
            params: {
               usuario_id: ID,
            },
            headers: {
               "Content-Type": "application/json",
            },
         };
         const body = JSON.stringify(data);

         return await axios.put(
            `${UsuarioEntity.url}/actualizar`,
            body,
            config
         );
      } catch (error: any) {
         error.message = personalizarMensajeError(error);
         return Promise.reject(error);
      }
   }

   async listarTodos(): Promise<AxiosResponse> {
      try {
         const config = {
            headers: {
               "Content-Type": "application/json",
            },
         };

         return await axios.get(`${UsuarioEntity.url}/todos`, config);
      } catch (error: any) {
         error.message = personalizarMensajeError(error);
         return Promise.reject(error);
      }
   }

   async historial(idUsuario: number): Promise<AxiosResponse> {
      try {
         const config = {
            params: {
               usuario_id: idUsuario,
            },
            headers: {
               "Content-Type": "application/json",
            },
         };

         return await axios.get(`${UsuarioEntity.url}/historial`, config);
      } catch (error: any) {
         error.message = personalizarMensajeError(error);
         return Promise.reject(error);
      }
   }

   async eliminarUno(ID: number): Promise<AxiosResponse> {
      try {
         const config = {
            params: {
               usuario_id: ID,
            },
         };
         return await axios.delete(`${UsuarioEntity.url}/eliminar`, config);
      } catch (error: any) {
         error.message = personalizarMensajeError(error);
         return Promise.reject(error);
      }
   }
}
