import { ProductoDto } from 'src/aplicacion/producto/consulta/dto/producto.dto';

export abstract class DaoProducto {
  abstract listar(): Promise<ProductoDto[]>;
  abstract consultar(nombre: string): Promise<ProductoDto>;
  abstract eliminar(nombre: string);
  abstract cambiar(
    nombre: string,
    precio: number,
    detalle: string,
    nombreImagen: string
  );
}
