import { Injectable } from '@nestjs/common';

import { DaoCategoria } from 'src/dominio/categoria/puerto/dao/dao-categoria';

@Injectable()
export class ManejadorCambiarCategoria {
  constructor(private _daoCategoria: DaoCategoria) {}

  async ejecutar({ nombre, descripcionActual, nuevaDescripcion }) {
    return this._daoCategoria.cambiar(
      nombre,
      descripcionActual,
      nuevaDescripcion,
    );
  }
}
