import { Module } from '@nestjs/common';
import { ServicioRegistrarUsuario } from 'src/dominio/usuario/servicio/servicio-registrar-usuario';
import { RepositorioUsuario } from 'src/dominio/usuario/puerto/repositorio/repositorio-usuario';
import { servicioRegistrarUsuarioProveedor } from './servicio/servicio-registrar-usuario.proveedor';
import { repositorioUsuarioProvider } from './repositorio/repositorio-usuario.proveedor';
import { daoUsuarioProvider } from './dao/dao-usuario.proveedor';
import { ManejadorRegistrarUsuario } from 'src/aplicacion/usuario/comando/registar-usuario.manejador';
import { DaoUsuario } from 'src/dominio/usuario/puerto/dao/dao-usuario';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntidad } from '../entidad/usuario.entidad';
import { ManejadorConsultarUsuario } from 'src/aplicacion/usuario/consulta/consultar-usuario.manejador';
import { ManejadorCambiarUsuario } from 'src/aplicacion/usuario/cambio/cambiar-usuario.manejador';
import { ManejadorEliminarUsuario } from 'src/aplicacion/usuario/cambio/eliminar-usuario.manejador';
import { ManejadorConsultarCliente } from 'src/aplicacion/usuario/consulta/consultar-cliente.manejador';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntidad])],
  providers: [
    {
      provide: ServicioRegistrarUsuario,
      inject: [RepositorioUsuario],
      useFactory: servicioRegistrarUsuarioProveedor,
    },
    repositorioUsuarioProvider,
    daoUsuarioProvider,
    ManejadorRegistrarUsuario,
    ManejadorConsultarUsuario,
    ManejadorConsultarCliente,
    ManejadorCambiarUsuario,
    ManejadorEliminarUsuario,
  ],
  exports: [
    ServicioRegistrarUsuario,
    ManejadorRegistrarUsuario,
    ManejadorConsultarUsuario,
    ManejadorConsultarCliente,
    ManejadorCambiarUsuario,
    ManejadorEliminarUsuario,
    RepositorioUsuario,
    DaoUsuario,
  ],
})
export class UsuarioProveedorModule {}
