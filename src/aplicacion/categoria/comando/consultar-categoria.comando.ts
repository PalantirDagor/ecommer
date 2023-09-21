import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ComandoConsultarCategoria {
  @IsString()
  @ApiProperty({ example: 'Cocina' })
  public nombre: string;

  @IsString()
  @ApiProperty({ minLength: 10, example: 'Productos culinarios' })
  public descripcion: string;
}
