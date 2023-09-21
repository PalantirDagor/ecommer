import { Injectable } from '@nestjs/common';

import { DaoCategoria } from 'src/dominio/categoria/puerto/dao/dao-categoria';

@Injectable()
export class ManejadorEliminarCategoria {
  constructor(private _daoCategoria: DaoCategoria) {}

  async ejecutar(nombre: string) {
    return this._daoCategoria.eliminar(nombre);
  }
}
