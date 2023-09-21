import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoRegistrarCategoria {
  @IsString()
  @ApiProperty({ example: 'Cocina'})
  public nombre: string;

  @IsString()
  @ApiProperty({ minLength: 10, example: 'Productos culinarios' })
  public descripcion: string;
}
