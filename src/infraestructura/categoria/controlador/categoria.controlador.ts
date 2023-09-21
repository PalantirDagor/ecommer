import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ComandoRegistrarCategoria } from 'src/aplicacion/categoria/comando/registrar-categoria.comando';
import { ManejadorRegistrarCategoria } from 'src/aplicacion/categoria/comando/registrar-categoria.manejador';
import { CategoriaDto } from 'src/aplicacion/categoria/consulta/dto/categoria.dto';
import { ManejadorConsultarCategoria } from 'src/aplicacion/categoria/consulta/consultar-categoria.manejador';
import { ComandoConsultarCategoria } from 'src/aplicacion/categoria/comando/consultar-categoria.comando';
import { ComandoCambiarCategoria } from 'src/aplicacion/categoria/comando/cambiar-categoria.comando';
import { ManejadorCambiarCategoria } from 'src/aplicacion/categoria/cambio/cambiar-categoria.manejador';
import { ManejadorEliminarCategoria } from 'src/aplicacion/categoria/cambio/eliminar-categoria.manejador';

@Controller('categorias')
export class CategoriaControlador {
  constructor(
    private readonly _manejadorRegistrarCategoria: ManejadorRegistrarCategoria,
    private readonly _manejadorConsultarCategoria: ManejadorConsultarCategoria,
    private readonly _manejadorCambiarCategoria: ManejadorCambiarCategoria,
    private readonly _manejadorEliminarCategoria: ManejadorEliminarCategoria,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async crear(@Body() comandoRegistrarCategoria: ComandoRegistrarCategoria) {
    await this._manejadorRegistrarCategoria.ejecutar(comandoRegistrarCategoria);
  }

  @Get()
  async consultarCategoria(
    @Query() comandoConsultarCategoria: ComandoConsultarCategoria,
  ): Promise<CategoriaDto> {
    return this._manejadorConsultarCategoria.ejecutar(
      comandoConsultarCategoria,
    );
  }

  @Patch()
  async cambiarDescripcion(
    @Body() comandoCambiarCategoria: ComandoCambiarCategoria,
  ) {
    return this._manejadorCambiarCategoria.ejecutar(comandoCambiarCategoria);
  }

  @Delete()
  async eliminarCategoria(@Query('nombre') nombre: string) {
    return this._manejadorEliminarCategoria.ejecutar(nombre);
  }
}
