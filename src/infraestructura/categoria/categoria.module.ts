import { Module } from '@nestjs/common';
import { CategoriaControlador } from './controlador/categoria.controlador';
import { CategoriaProveedorModule } from './proveedor/categoria-proveedor.module';

@Module({
  imports: [CategoriaProveedorModule],
  controllers: [CategoriaControlador],
})
export class CategoriaModule {}
