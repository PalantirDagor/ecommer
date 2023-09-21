import { CategoriaDto } from 'src/aplicacion/categoria/consulta/dto/categoria.dto';

export abstract class DaoCategoria {
  abstract consultar(
    nombre: string,
    descripcion: string,
  ): Promise<CategoriaDto>;
  abstract cambiar(
    nombre: string,
    descripcionActual: string,
    nuevaDescripcion: string,
  );
  abstract eliminar(nombre: string);
}
