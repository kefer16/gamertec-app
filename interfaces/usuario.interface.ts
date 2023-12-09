export type privilegio = "ADM" | "USU" | "INV";

export interface LogeoUsuario {
   usuario_id: number;
   nombre: string;
   apellido: string;
   correo: string;
   usuario: string;
   direccion: string;
   telefono: string;
   foto: string;
   cls_privilegio: PrivilegioLogin;
}

export interface PrivilegioLogin {
   privilegio_id: number;
   abreviatura: privilegio;
   tipo: string;
}
