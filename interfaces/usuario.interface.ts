export type privilegio = "ADM" | "USU" | "INV";

export interface LogeoUsuario {
   usuario_id: number;
   nombre: string;
   apellido: string;
   correo: string;
   usuario: string;
   dinero: number;
   foto: string;
   activo: boolean;
   fk_privilegio: number;
   direccion: string;
   telefono: string;
   cls_privilegio: PrivilegioLogin;
}

export interface PrivilegioLogin {
   privilegio_id: number;
   abreviatura: privilegio;
   tipo: string;
}
