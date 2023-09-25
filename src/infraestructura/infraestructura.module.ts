import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppLogger } from './configuracion/ecommer-logger.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NodeEnv } from './configuracion/environment/env-node.enum';
import { databaseConfigFactory } from './configuracion/database.config';
// import { VentaModule } from './venta/venta.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  providers: [AppLogger],
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: databaseConfigFactory,
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `env/${process.env.NODE_ENV}.env`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid(NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION)
          .required(),
      }),
    }),
    UsuarioModule,
    // VentaModule,
    ProductoModule,
    CategoriaModule,
  ],
})
export class InfraestructuraModule {
}
