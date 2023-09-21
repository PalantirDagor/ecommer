import { Categoria } from '../../modelo/categoria';

export abstract class RepositorioCategoria {
  abstract guardar(categoria: Categoria);
}
