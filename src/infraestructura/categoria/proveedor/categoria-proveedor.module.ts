import { Module } from '@nestjs/common';
import { ServicioRegistrarCategoria } from 'src/dominio/categoria/servicio/servicio-registrar-categoria';
import { RepositorioCategoria } from 'src/dominio/categoria/puerto/repositorio/repositorio-categoria';
import { servicioRegistrarCategoriaProveedor } from './servicio/servicio-registrar-categoria.proveedor';
import { repositorioCategoriaProvider } from './repositorio/repositorio-categoria.proveedor';
import { daoCategoriaProvider } from './dao/dao-categoria.proveedor';
import { ManejadorRegistrarCategoria } from 'src/aplicacion/categoria/comando/registrar-categoria.manejador';
import { DaoCategoria } from 'src/dominio/categoria/puerto/dao/dao-categoria';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaEntidad } from '../entidad/categoria.entidad';
import { ManejadorConsultarCategoria } from 'src/aplicacion/categoria/consulta/consultar-categoria.manejador';
import { ManejadorCambiarCategoria } from 'src/aplicacion/categoria/cambio/cambiar-categoria.manejador';
import { ManejadorEliminarCategoria } from 'src/aplicacion/categoria/cambio/eliminar-categoria.manejador';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaEntidad])],
  providers: [
    {
      provide: ServicioRegistrarCategoria,
      inject: [RepositorioCategoria],
      useFactory: servicioRegistrarCategoriaProveedor,
    },
    repositorioCategoriaProvider,
    daoCategoriaProvider,
    ManejadorRegistrarCategoria,
    ManejadorConsultarCategoria,
    ManejadorCambiarCategoria,
    ManejadorEliminarCategoria,
  ],
  exports: [
    ServicioRegistrarCategoria,
    ManejadorRegistrarCategoria,
    ManejadorConsultarCategoria,
    ManejadorCambiarCategoria,
    ManejadorEliminarCategoria,
    RepositorioCategoria,
    DaoCategoria,
  ],
})
export class CategoriaProveedorModule {}
