import { Categoria } from '../../modelo/categoria';

export abstract class RepositorioCategoria {
  abstract existeNombreCategoria(nombre: string);
  abstract guardar(categoria: Categoria);
}
