import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ComandoCambiarProducto {
  @IsString()
  @ApiProperty({ example: 'Iphone 15' })
  public nombre: string;

  @IsString()
  @ApiProperty()
  public precio: number;

  @IsString()
  @ApiProperty({ minLength: 10, example: 'productos culinarios' })
  public detalle: string;

  @IsString()
  @ApiProperty({ minLength: 10, example: 'productos culinarios' })
  public nombreImagen: string;
}
