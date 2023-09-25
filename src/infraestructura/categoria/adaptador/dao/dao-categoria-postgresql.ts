import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { DaoCategoria } from 'src/dominio/categoria/puerto/dao/dao-categoria';
import { CategoriaDto } from 'src/aplicacion/categoria/consulta/dto/categoria.dto';

@Injectable()
export class DaoCategoriaPostgresql implements DaoCategoria {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async consultar(nombre: string): Promise<CategoriaDto> {
    let respuesta: Array<CategoriaDto>;
    respuesta = await this.entityManager.query(
      'SELECT c.nombre, c.descripcion FROM CATEGORIA c WHERE c.nombre = $1',
      [nombre],
    );

    if (respuesta.length === 0) {
      throw new NotFoundException('Error Categoria no Existe');
    }

    return respuesta[0];
  }

  async cambiar(
    nombre: string,
    descripcionActual: string,
    nuevaDescripcion: string,
  ) {
    let respuesta: Array<number>;
    respuesta = await this.entityManager.query(
      'UPDATE CATEGORIA SET descripcion = $1 WHERE nombre = $2 AND descripcion = $3',
      [nuevaDescripcion, nombre, descripcionActual],
    );

    if (!respuesta.includes(1)) {
      throw new NotFoundException(
        'Error de Credenciales, verifique su clave actual',
      );
    }
  }

  async eliminar(nombre: string) {
    this.entityManager.query(
      'DELETE FROM VENTA p WHERE p.usuario_id = (SELECT u.id FROM CATEGORIA u WHERE u.nombre = $1)',
      [nombre],
    );

    return this.entityManager.query(
      'DELETE FROM CATEGORIA c WHERE c.nombre = $1',
      [nombre],
    );
  }

  async listar(): Promise<CategoriaDto[]> {
    return this.entityManager.query(
      'SELECT c.nombre, c.descripcion FROM CATEGORIA c',
    );
  }
}
