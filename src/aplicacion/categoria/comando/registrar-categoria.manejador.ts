import { Injectable } from '@nestjs/common';
import { ServicioRegistrarCategoria } from 'src/dominio/categoria/servicio/servicio-registrar-categoria';
import { ComandoRegistrarCategoria } from './registrar-categoria.comando';
import { Categoria } from 'src/dominio/categoria/modelo/categoria';

@Injectable()
export class ManejadorRegistrarCategoria {
  constructor(
    private _servicioRegistrarCategoria: ServicioRegistrarCategoria,
  ) {}

  async ejecutar(comandoRegistrarCategoria: ComandoRegistrarCategoria) {
    await this._servicioRegistrarCategoria.ejecutar(
      new Categoria(
        comandoRegistrarCategoria.nombre,
        comandoRegistrarCategoria.descripcion,
      ),
    );
  }
}
