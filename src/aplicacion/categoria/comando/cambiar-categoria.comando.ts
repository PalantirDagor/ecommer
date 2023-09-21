import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ComandoCambiarCategoria {
  @IsString()
  @ApiProperty({ example: 'Cocina' })
  public nombre: string;

  @IsString()
  @ApiProperty({ minLength: 10, example: 'productos para cocinar' })
  public descripcionActual: string;

  @IsString()
  @ApiProperty({ minLength: 10, example: 'productos culinarios' })
  public nuevaDescripcion: string;
}
