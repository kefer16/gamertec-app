import { API_URL } from "@env";
const ENV_API_URL: string = API_URL ?? "";

export class UsuarioEntity {
   constructor(
      public usuario_id: number = 0,
      public nombre: string = "",
      public apellido: string = "",
      public correo: string = "",
      public usuario: string = "",
      public contrasenia: string = "",
      public foto: string = "",
      public fecha_registro: string = "",
      public direccion: string = "",
      public telefono: string = "",
      public activo: boolean = false,
      public fk_privilegio: number = 0,
      public fecha_inicial: string = "",
      public fecha_final: string = ""
   ) {}
   public static url = `${ENV_API_URL}/usuario`;
}
