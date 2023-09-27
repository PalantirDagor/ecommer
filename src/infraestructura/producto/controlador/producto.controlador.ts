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
import { ComandoCambiarProducto } from 'src/aplicacion/producto/cambio/cambiar-categoria.comando';
import { ManejadorCambiarProducto } from 'src/aplicacion/producto/cambio/cambiar-producto.manejador';
import { ManejadorEliminarProducto } from 'src/aplicacion/producto/cambio/eliminar-producto.manejador';

import { ComandoRegistrarProducto } from 'src/aplicacion/producto/comando/registrar-producto.comando';
import { ManejadorRegistrarProducto } from 'src/aplicacion/producto/comando/registrar-producto.manejador';
import { ManejadorConsultarProducto } from 'src/aplicacion/producto/consulta/consultar-producto.manejador';
import { ProductoDto } from 'src/aplicacion/producto/consulta/dto/producto.dto';
import { ManejadorFiltrarProducto } from 'src/aplicacion/producto/consulta/filtrar-producto.manejador';
import { ManejadorListarProducto } from 'src/aplicacion/producto/consulta/listar-producto.manejador';

@Controller('productos')
export class ProductoControlador {
  constructor(
    private readonly _manejadorRegistrarProducto: ManejadorRegistrarProducto,
    private readonly _manejadorListarProducto: ManejadorListarProducto,
    private readonly _manejadorConsultarProducto: ManejadorConsultarProducto,
    private readonly _manejadorEliminarProducto: ManejadorEliminarProducto,
    private readonly _manejadorCambiarProducto: ManejadorCambiarProducto,
    private readonly _manejadorFiltrarProducto: ManejadorFiltrarProducto,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async crear(@Body() comandoRegistrarProducto: ComandoRegistrarProducto) {
    await this._manejadorRegistrarProducto.ejecutar(comandoRegistrarProducto);
  }

  @Get(':nombreCategoria')
  async filtrarProducto(
    @Param('nombreCategoria') nombreCategoria: string,
  ): Promise<ProductoDto[]> {
    return this._manejadorFiltrarProducto.ejecutar(nombreCategoria);
  }
  
  @Get()
  async listarProductos(): Promise<ProductoDto[]> {
    return this._manejadorListarProducto.ejecutar();
  }

  @Get()
  async consultarProducto(
    @Query('nombre') nombre: string,
  ): Promise<ProductoDto> {
    return this._manejadorConsultarProducto.ejecutar(nombre);
  }


  @Delete()
  async eliminarProducto(@Query('nombre') nombre: string) {
    return this._manejadorEliminarProducto.ejecutar(nombre);
  }

  @Patch()
  async cambiarProducto(
    @Body() comandoCambiarProducto: ComandoCambiarProducto,
  ) {
    return this._manejadorCambiarProducto.ejecutar(comandoCambiarProducto);
  }
}
