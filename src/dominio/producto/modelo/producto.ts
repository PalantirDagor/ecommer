import { Categoria } from 'src/dominio/categoria/modelo/categoria';
import { ErrorValorRequerido } from 'src/dominio/errores/error-valor-requerido';

export class Producto {
  readonly #nombre: string;
  readonly #precio: number;
  readonly #descripcion: string;
  readonly #categoria: Categoria;

  constructor(
    nombre: string,
    precio: number,
    descripcion: string,
    categoria: Categoria,
  ) {
    this.validarCampo(nombre, 'Nombre');
    this.validarCampo(descripcion, 'Descripcion');
    this.#nombre = nombre;
    this.#precio = precio;
    this.#descripcion = descripcion;
    this.#categoria = categoria;
  }

  private validarCampo(campoAValidar: string, nombreCampo: string) {
    if (!campoAValidar) {
      throw new ErrorValorRequerido(
        `El campo ${nombreCampo} esta vacio, es requerido`,
      );
    }
  }

  get nombre(): string {
    return this.#nombre;
  }

  get precio(): number {
    return this.#precio;
  }

  get descripcion(): string {
    return this.#descripcion;
  }

  get categoria(): Categoria {
    return this.#categoria;
  }
}
