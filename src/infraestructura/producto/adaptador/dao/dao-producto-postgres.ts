import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { ProductoDto } from 'src/aplicacion/producto/consulta/dto/producto.dto';
import { DaoProducto } from 'src/dominio/producto/puerto/dao/dao-producto';
import { EntityManager } from 'typeorm';

@Injectable()
export class DaoProductoPostgres implements DaoProducto {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async listar(): Promise<ProductoDto[]> {
    return this.entityManager.query(
      `SELECT p.nombre, p.precio, p.detalle, c.nombre AS "nombreCategoria", p.nombre_imagen AS "nombreImagen" 
      FROM PRODUCTO p, CATEGORIA  c
      WHERE c.id = p.categoria_id`,
    );
  }

  async consultar(nombre: string): Promise<ProductoDto> {
    let respuesta: Array<ProductoDto>;
    respuesta = await this.entityManager.query(
      'SELECT p.nombre, p.precio, p.detalle, p.nombre_imagen AS "nombreImagen" FROM PRODUCTO p WHERE p.nombre = $1',
      [nombre],
    );

    if (respuesta.length === 0) {
      throw new NotFoundException('Error, producto no existe');
    }

    return respuesta[0];
  }

  async eliminar(nombre: string) {
    return this.entityManager.query(
      'DELETE FROM PRODUCTO p WHERE p.nombre = $1',
      [nombre],
    );
  }

  async cambiar(
    nombre: string,
    precio: number,
    detalle: string,
    nombreImagen: string,
  ) {
    let respuesta: Array<number>;
    respuesta = await this.entityManager.query(
      'UPDATE PRODUCTO SET precio = $1, detalle = $2 WHERE nombre = $3 AND nombre_imagen = $4',
      [precio, detalle, nombre, nombreImagen],
    );

    if (!respuesta.includes(1)) {
      throw new NotFoundException('Error del producto, verifique los datos');
    }
  }

  async filtrar(nombreCategoria: string): Promise<ProductoDto[]> {
    return this.entityManager.query(
      `SELECT p.nombre, p.precio, p.detalle, c.nombre AS "nombreCategoria", p.nombre_imagen AS "nombreImagen" 
      FROM PRODUCTO p, CATEGORIA  c
      WHERE c.id = p.categoria_id 
      AND c.nombre = $1`,
      [nombreCategoria],
    );
  }
}
