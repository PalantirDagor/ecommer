import { Injectable } from '@nestjs/common';

import { DaoUsuario } from 'src/dominio/usuario/puerto/dao/dao-usuario';
import { ClienteDto } from './dto/cliente.dto';

@Injectable()
export class ManejadorConsultarCliente {
  constructor(private _daoUsuario: DaoUsuario) {}

  async ejecutar(nombre): Promise<ClienteDto> {
    return this._daoUsuario.consultarCliente(nombre);
  }
}
