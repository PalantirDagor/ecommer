import { Injectable } from '@nestjs/common';

import { DaoCategoria } from 'src/dominio/categoria/puerto/dao/dao-categoria';
import { CategoriaDto } from './dto/categoria.dto';

@Injectable()
export class ManejadorListarCategoria {
  constructor(private _daoCategoria: DaoCategoria) {}

  async ejecutar(): Promise<CategoriaDto[]> {
    return this._daoCategoria.listar();
  }
}
