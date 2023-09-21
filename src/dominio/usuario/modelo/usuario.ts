import { ErrorLongitudInvalida } from 'src/dominio/errores/error-longitud-invalida';
import { ErrorTipoIncorrecto } from 'src/dominio/errores/error-tipo-incorrecto';
import { ErrorValorRequerido } from 'src/dominio/errores/error-valor-requerido';

const NUMERO_MINIMO_CARACTERES_CLAVE = 4;
const TIPO: string[] = ['ADMIN', 'CLIENTE'];

export class Usuario {
  readonly #nombre: string;
  readonly #clave: string;
  readonly #tipo: string;

  constructor(nombre: string, clave: string, tipo: string) {
    this.validarCampo(nombre, 'Nombre');
    this.validarTamanoClave(clave);
    this.validarTipoUsuario(tipo);
    this.#nombre = nombre;
    this.#clave = clave;
    this.#tipo = tipo;
  }

  private validarTamanoClave(clave: string) {
    this.validarCampo(clave, 'Clave');

    if (clave.length < NUMERO_MINIMO_CARACTERES_CLAVE) {
      throw new ErrorLongitudInvalida(
        `El tamaño mínimo de la clave debe ser ${NUMERO_MINIMO_CARACTERES_CLAVE}`,
      );
    }
  }

  private validarCampo(campoAValidar: string, nombreCampo: string) {
    if (!campoAValidar) {
      throw new ErrorValorRequerido(
        `El campo ${nombreCampo} esta vacio, es requerido`,
      );
    }
  }

  private validarTipoUsuario(tipo: string) {
    if (!TIPO.includes(tipo)) {
      throw new ErrorTipoIncorrecto(
        `El tipo de Usuario debe ser: ${TIPO.toString()}.`,
      );
    }
  }

  get nombre(): string {
    return this.#nombre;
  }

  get clave(): string {
    return this.#clave;
  }

  get tipo(): string {
    return this.#tipo;
  }
}
