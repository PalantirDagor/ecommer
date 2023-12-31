import { RepositorioUsuario } from 'src/dominio/usuario/puerto/repositorio/repositorio-usuario';
import { Usuario } from 'src/dominio/usuario/modelo/usuario';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntidad } from '../../entidad/usuario.entidad';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RepositorioUsuarioPostgresql implements RepositorioUsuario {
  constructor(
    @InjectRepository(UsuarioEntidad)
    private readonly repositorio: Repository<UsuarioEntidad>,
  ) {}

  async existeNombreUsuario(nombre: string): Promise<boolean> {
    const numOcurrencia = await this.repositorio
      .createQueryBuilder('usuario')
      .where('usuario.nombre = :nombre', { nombre })
      .getCount();

    return numOcurrencia > 0;
  }

  async guardar(usuario: Usuario) {
    const entidad = new UsuarioEntidad();
    entidad.clave = usuario.clave;
    entidad.tipo = usuario.tipo;
    entidad.nombre = usuario.nombre;
    await this.repositorio.save(entidad);
    return usuario;
  }
}
