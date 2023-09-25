import { Injectable } from '@nestjs/common';

import { DaoProducto } from 'src/dominio/producto/puerto/dao/dao-producto';

@Injectable()
export class ManejadorEliminarProducto {
  constructor(private _daoCategoria: DaoProducto) {}

  async ejecutar(nombre: string) {
    return this._daoCategoria.eliminar(nombre);
  }
}
