import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
import { ManejadorListarCategoria } from 'src/aplicacion/categoria/consulta/listar-categoria.manejador';

@Controller('categorias')
export class CategoriaControlador {
  constructor(
    private readonly _manejadorRegistrarCategoria: ManejadorRegistrarCategoria,
    private readonly _manejadorConsultarCategoria: ManejadorConsultarCategoria,
    private readonly _manejadorCambiarCategoria: ManejadorCambiarCategoria,
    private readonly _manejadorEliminarCategoria: ManejadorEliminarCategoria,
    private readonly _manejadorListarCategoria: ManejadorListarCategoria,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async crear(@Body() comandoRegistrarCategoria: ComandoRegistrarCategoria) {
    await this._manejadorRegistrarCategoria.ejecutar(comandoRegistrarCategoria);
  }

  @Get(':nombre')
  async consultarCategoria(
    @Param('nombre') nombre: string,
  ): Promise<CategoriaDto> {
    return this._manejadorConsultarCategoria.ejecutar(nombre);
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

  @Get()
  async listarCategorias(): Promise<CategoriaDto[]> {
    return this._manejadorListarCategoria.ejecutar();
  }
}
