import { DaoCategoria } from 'src/dominio/categoria/puerto/dao/dao-categoria';
import { DaoCategoriaPostgresql } from 'src/infraestructura/categoria/adaptador/dao/dao-categoria-postgresql';

export const daoCategoriaProvider = {
  provide: DaoCategoria,
  useClass: DaoCategoriaPostgresql,
};
