import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesHandlerModule } from '@hilma/fileshandler-server';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    FilesHandlerModule.register({
      folder: '../../files-handler',
    }),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
