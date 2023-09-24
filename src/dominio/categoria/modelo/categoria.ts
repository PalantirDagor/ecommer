import { ErrorValorRequerido } from 'src/dominio/errores/error-valor-requerido';


export class Categoria {
  readonly #nombre: string;
  readonly #descripcion: string;

  constructor(nombre: string, descripcion: string) {
    this.validarCampo(nombre, 'Nombre');
    this.validarCampo(descripcion, 'Descripcion');
    this.#nombre = nombre;
    this.#descripcion = descripcion;
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
  
  get descripcion(): string {
    return this.#descripcion;
  }
}
