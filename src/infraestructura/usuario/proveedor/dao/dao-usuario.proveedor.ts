import { DaoUsuario } from 'src/dominio/usuario/puerto/dao/dao-usuario';
import { DaoUsuarioPostgresql } from 'src/infraestructura/usuario/adaptador/dao/dao-usuario-postgresql';

export const daoUsuarioProvider = {
  provide: DaoUsuario,
  useClass: DaoUsuarioPostgresql,
};
