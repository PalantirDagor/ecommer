import { RepositorioCategoria } from 'src/dominio/categoria/puerto/repositorio/repositorio-categoria';
import { Categoria } from 'src/dominio/categoria/modelo/categoria';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaEntidad } from '../../entidad/categoria.entidad';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RepositorioCategoriaPostgresql implements RepositorioCategoria {
  constructor(
    @InjectRepository(CategoriaEntidad)
    private readonly repositorio: Repository<CategoriaEntidad>,
  ) {}

  async guardar(categoria: Categoria) {
    const entidad = new CategoriaEntidad();
    entidad.descripcion = categoria.descripcion;
    entidad.nombre = categoria.nombre;
    await this.repositorio.save(entidad);
    return categoria;
  }
}
