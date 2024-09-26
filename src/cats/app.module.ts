import { Global, Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatsModule } from './cats.module';

@Global()
@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
