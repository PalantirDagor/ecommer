import { Injectable } from '@nestjs/common';

import { DaoProducto } from 'src/dominio/producto/puerto/dao/dao-producto';

@Injectable()
export class ManejadorCambiarProducto {
  constructor(private _daoCategoria: DaoProducto) {}

  async ejecutar({ nombre, precio, detalle, nombreImagen }) {
    return this._daoCategoria.cambiar(nombre, precio, detalle, nombreImagen);
  }
}
