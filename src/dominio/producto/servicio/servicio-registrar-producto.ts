import { RepositorioProducto } from '../puerto/repositorio/repositorio-producto';
import { Producto } from '../modelo/producto';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';
// import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';

export class ServicioRegistrarProducto {
  constructor(private readonly _repositorioProducto: RepositorioProducto) {}

  async ejecutar(producto: Producto) {
    if (await this._repositorioProducto.existeNombreProducto(producto.nombre)) {
      throw new ErrorDeNegocio(
        `El nombre del producto ${producto.nombre} ya existe`,
      );
    }

    await this._repositorioProducto.guardar(producto);
  }
}
