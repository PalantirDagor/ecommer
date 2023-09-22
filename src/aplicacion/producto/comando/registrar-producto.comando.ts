import { IsNumber, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Categoria } from 'src/dominio/categoria/modelo/categoria';

export class ComandoRegistrarProducto {
  @IsString()
  @ApiProperty({ example: 'SmartWatch'})
  public nombre: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  public precio: number;

  @IsString()
  @ApiProperty({ maxLength: 100, example: 'Perfecto para todo tipo...' })
  public detalle: string;

  @IsObject()
  @ApiProperty({ type: Categoria})
  public categoria: Categoria;

  @IsString()
  @ApiProperty({ example: '../../imagenes' })
  public nombreImagen: string;
}
