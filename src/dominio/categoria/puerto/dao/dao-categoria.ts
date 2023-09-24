import { CategoriaDto } from 'src/aplicacion/categoria/consulta/dto/categoria.dto';

export abstract class DaoCategoria {
  abstract consultar(nombre: string): Promise<CategoriaDto>;
  abstract eliminar(nombre: string);
  abstract listar(): Promise<CategoriaDto[]>;
  abstract cambiar(
    nombre: string,
    descripcionActual: string,
    nuevaDescripcion: string,
  );
}
