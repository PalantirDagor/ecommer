import { RepositorioCategoria } from '../puerto/repositorio/repositorio-categoria';
import { Categoria } from '../modelo/categoria';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';

export class ServicioRegistrarCategoria {
  constructor(private readonly _repositorioCategoria: RepositorioCategoria) {}

  async ejecutar(categoria: Categoria) {
    if (
      await this._repositorioCategoria.existeNombreCategoria(categoria.nombre)
    ) {
      throw new ErrorDeNegocio(
        `El nombre de la categoria ${categoria.nombre} ya existe`,
      );
    }

    await this._repositorioCategoria.guardar(categoria);
  }
}
