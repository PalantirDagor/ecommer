import { ApiProperty } from '@nestjs/swagger';

export class CategoriaDto {
  @ApiProperty({ example: 'Cocina' })
  nombre: string;

  @ApiProperty({ example: 'Lorem ipsum de descripcion' })
  descripcion: string;
}
