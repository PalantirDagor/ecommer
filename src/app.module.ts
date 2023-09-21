import { Module } from '@nestjs/common';
import { InfraestructuraModule } from './infraestructura/infraestructura.module';

@Module({
  imports: [InfraestructuraModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
