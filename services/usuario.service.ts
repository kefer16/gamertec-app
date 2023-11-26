import { UsuarioApi } from "../apis/usuario.api";
import { UsuarioEntity } from "../entities/usuario.entity";
import { LogeoUsuario } from "../interfaces/usuario.interface";

export class UsuarioService {
   private apiUsuario = new UsuarioApi();

   private rspLogearse: LogeoUsuario = {} as LogeoUsuario;
   private rspRegistrar: boolean = false;
   private rspActualizar: boolean = false;
   private rspListarTodo: UsuarioEntity[] = [];
   private rspHistorial: UsuarioEntity[] = [];
   private rspEliminarUno: boolean = false;

   async logearse(usuario: string, contrasenia: string): Promise<LogeoUsuario> {
      await this.apiUsuario.logearse(usuario, contrasenia).then((resp) => {
         this.rspLogearse = resp.data.data;
      });
      return this.rspLogearse;
   }

   async registrar(data: UsuarioEntity): Promise<boolean> {
      await this.apiUsuario.registrar(data).then((resp) => {
         this.rspRegistrar = resp.data.data;
      });
      return this.rspRegistrar;
   }

   async actualizar(usuario_id: number, data: UsuarioEntity): Promise<boolean> {
      await this.apiUsuario.actualizar(usuario_id, data).then((resp) => {
         this.rspActualizar = resp.data.data;
      });
      return this.rspActualizar;
   }

   async listarTodos(): Promise<UsuarioEntity[]> {
      await this.apiUsuario.listarTodos().then((resp) => {
         this.rspListarTodo = resp.data.data;
      });
      return this.rspListarTodo;
   }

   async historial(idUsuario: number): Promise<UsuarioEntity[]> {
      await this.apiUsuario.historial(idUsuario).then((resp) => {
         this.rspHistorial = resp.data.data;
      });
      return this.rspHistorial;
   }

   async eliminarUno(usuario_id: number): Promise<boolean> {
      await this.apiUsuario.eliminarUno(usuario_id).then((resp) => {
         this.rspEliminarUno = resp.data.data;
      });
      return this.rspEliminarUno;
   }
}
