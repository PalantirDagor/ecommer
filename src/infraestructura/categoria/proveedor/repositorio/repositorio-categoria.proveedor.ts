import { RepositorioCategoria } from 'src/dominio/categoria/puerto/repositorio/repositorio-categoria';
import { RepositorioCategoriaPostgresql } from 'src/infraestructura/categoria/adaptador/repositorio/repositorio-categoria-postgresql';

export const repositorioCategoriaProvider = {
  provide: RepositorioCategoria,
  useClass: RepositorioCategoriaPostgresql,
};
