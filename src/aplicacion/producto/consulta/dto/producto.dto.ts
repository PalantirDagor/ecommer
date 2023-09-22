import { ApiProperty } from '@nestjs/swagger';
import { Categoria } from 'src/dominio/categoria/modelo/categoria';

export class ProductoDto {

  @ApiProperty({ example: 'SmartWatch' })
  nombre: string;

  @ApiProperty({ type: Number })
  precio: number;

  @ApiProperty({ maxLength: 100, example: 'Excelente dispositivo...' })
  detalle: string;

  @ApiProperty({ type: Categoria })
  categoria: Categoria;

  @ApiProperty({ example: '../../imagenes' })
  nombreImagen: string;
}
