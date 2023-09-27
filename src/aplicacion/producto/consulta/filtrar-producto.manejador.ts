import { Injectable } from '@nestjs/common';

import { DaoProducto } from 'src/dominio/producto/puerto/dao/dao-producto';
import { ProductoDto } from 'src/aplicacion/producto/consulta/dto/producto.dto';

@Injectable()
export class ManejadorFiltrarProducto {
  constructor(private _daoProducto: DaoProducto) {}

  async ejecutar(nombreCategoria: string): Promise<ProductoDto[]> {
    return this._daoProducto.filtrar(nombreCategoria);
  }
}
