import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';

import { Producto } from 'src/dominio/producto/modelo/producto';
import { RepositorioProducto } from 'src/dominio/producto/puerto/repositorio/repositorio-producto';
import { EntityManager, Repository } from 'typeorm';
import { ProductoEntidad } from '../../entidad/producto.entidad';
import { CategoriaEntidad } from 'src/infraestructura/categoria/entidad/categoria.entidad';

@Injectable()
export class RepositorioProductoPostgres implements RepositorioProducto {
  constructor(
    @InjectRepository(ProductoEntidad)
    private readonly repositorio: Repository<ProductoEntidad>,
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  /*async existeNombreProducto(nombre: string): Promise<boolean> {
    return (await this.repositorio.count({ nombre })) > 0;
  }*/

  async guardar(producto: Producto) {
    const entidad = new ProductoEntidad();
    entidad.nombre = producto.nombre;
    entidad.precio = producto.precio;
    entidad.detalle = producto.detalle;
    entidad.categoria = await this.entityManager
      .createQueryBuilder()
      .select('categoria')
      .from(CategoriaEntidad, 'categoria')
      .where('categoria.nombre = :nombre', {
        nombre: producto.categoria.nombre,
      })
      .getOne();
    entidad.nombreImagen = producto.nombreImagen;
    await this.repositorio.save(entidad);
  }
}
