import { ErrorNoHayProducto } from 'src/dominio/errores/error-no-hay-producto';
import { ErrorNoHayUsuario } from 'src/dominio/errores/error-no-hay-usuario';
import { ErrorValorRequerido } from 'src/dominio/errores/error-valor-requerido';
import { Producto } from 'src/dominio/producto/modelo/producto';
import { Usuario } from 'src/dominio/usuario/modelo/usuario';

export class Venta {
  readonly #usuario: Usuario;
  readonly #productos: Producto[];
  readonly #fechaRealizacion: Date;
  readonly #valorTotal: number;
  readonly #cantidad: number;

  constructor(
    usuario: Usuario,
    productos: Producto[],
    fechaRealizacion: string,
    valorTotal: number,
    cantidad: number,
  ) {
    this.validarHayUsuario(usuario);
    this.validarHayProductos(productos);
    this.validarExisteValor(valorTotal, 'Valor Total');
    this.validarExisteValor(cantidad, 'Cantidad');
    this.#usuario = usuario;
    this.#productos = productos;
    this.#fechaRealizacion = new Date(fechaRealizacion);
    this.#valorTotal = valorTotal;
    this.#cantidad = cantidad;
  }

  private validarExisteValor(valorAVerificar: number, nombreCampo: string) {
    if (isNaN(valorAVerificar)) {
      throw new ErrorValorRequerido(
        `El campo ${nombreCampo} esta vacio, es requerido`,
      );
    }
  }

  private validarHayUsuario(usuario: Usuario) {
    if (!usuario) {
      throw new ErrorNoHayUsuario('El usuario esta vacio, es requerido');
    }
  }

  private validarHayProductos(productos: Producto[]) {
    if (!productos) {
      throw new ErrorNoHayProducto('El Producto esta vacio, es requerido');
    }
  }

  get usuario(): Usuario {
    return this.#usuario;
  }

  get productos(): Producto[] {
    return this.#productos;
  }

  get fechaRealizacion(): Date {
    return this.#fechaRealizacion;
  }

  get valorTotal(): number {
    return this.#valorTotal;
  }

  get cantidad(): number {
    return this.#cantidad;
  }
}
