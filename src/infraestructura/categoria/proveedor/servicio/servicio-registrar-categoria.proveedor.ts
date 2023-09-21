import { RepositorioCategoria } from 'src/dominio/categoria/puerto/repositorio/repositorio-categoria';
import { ServicioRegistrarCategoria } from 'src/dominio/categoria/servicio/servicio-registrar-categoria';

export function servicioRegistrarCategoriaProveedor(
  repositorioCategoria: RepositorioCategoria,
) {
  return new ServicioRegistrarCategoria(repositorioCategoria);
}
