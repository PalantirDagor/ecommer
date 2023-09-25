import { UsuarioDto } from 'src/aplicacion/usuario/consulta/dto/usuario.dto';

export abstract class DaoUsuario {
  abstract consultar(nombre: string, clave: string): Promise<UsuarioDto>;
  abstract consultarCliente(nombre: string);
  abstract cambiar(nombre: string, claveActual: string, claveNueva: string);
  abstract eliminar(nombre: string);
}