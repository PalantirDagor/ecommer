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
import { ComandoRegistrarUsuario } from 'src/aplicacion/usuario/comando/registrar-usuario.comando';
import { ManejadorRegistrarUsuario } from 'src/aplicacion/usuario/comando/registar-usuario.manejador';
import { UsuarioDto } from 'src/aplicacion/usuario/consulta/dto/usuario.dto';
import { ManejadorConsultarUsuario } from 'src/aplicacion/usuario/consulta/consultar-usuario.manejador';
import { ComandoConsultarUsuario } from 'src/aplicacion/usuario/comando/consultar-usuario.comando';
import { ComandoCambiarUsuario } from 'src/aplicacion/usuario/comando/cambiar-usuario.comando';
import { ManejadorCambiarUsuario } from 'src/aplicacion/usuario/cambio/cambiar-usuario.manejador';
import { ManejadorEliminarUsuario } from 'src/aplicacion/usuario/cambio/eliminar-usuario.manejador';
import { ClienteDto } from 'src/aplicacion/usuario/consulta/dto/cliente.dto';
import { ManejadorConsultarCliente } from 'src/aplicacion/usuario/consulta/consultar-cliente.manejador';

@Controller('usuarios')
export class UsuarioControlador {
  constructor(
    private readonly _manejadorRegistrarUsuario: ManejadorRegistrarUsuario,
    private readonly _manejadorConsultarUsuario: ManejadorConsultarUsuario,
    private readonly _manejadorConsultarCliente: ManejadorConsultarCliente,
    private readonly _manejadorCambiarUsuario: ManejadorCambiarUsuario,
    private readonly _manejadorEliminarUsuario: ManejadorEliminarUsuario,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async crear(@Body() comandoRegistrarUsuario: ComandoRegistrarUsuario) {
    await this._manejadorRegistrarUsuario.ejecutar(comandoRegistrarUsuario);
  }
  
  @Get(':nombre')
  async consultarCliente(@Param('nombre') nombre: string): Promise<ClienteDto> {
    return this._manejadorConsultarCliente.ejecutar(nombre);
  }
  
  @Get()
  async consultarUsuario(
    @Query() comandoConsultarUsuario: ComandoConsultarUsuario,
  ): Promise<UsuarioDto> {
    return this._manejadorConsultarUsuario.ejecutar(comandoConsultarUsuario);
  }

  @Patch()
  async cambiarClave(@Body() comandoCambiarUsuario: ComandoCambiarUsuario) {
    return this._manejadorCambiarUsuario.ejecutar(comandoCambiarUsuario);
  }

  @Delete()
  async eliminarUsuario(@Query('nombre') nombre: string) {
    return this._manejadorEliminarUsuario.ejecutar(nombre);
  }
}
