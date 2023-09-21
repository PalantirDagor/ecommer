import { RepositorioCategoria } from '../puerto/repositorio/repositorio-categoria';
import { Categoria } from '../modelo/categoria';

export class ServicioRegistrarCategoria {
  constructor(private readonly _repositorioCategoria: RepositorioCategoria) {}

  async ejecutar(categoria: Categoria) {
    await this._repositorioCategoria.guardar(categoria);
  }
}
