import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { FilesHandlerModule } from "@hilma/fileshandler-server"

@Module({
  imports: [
    CatModule,
    FilesHandlerModule.register({
      folder: "../../files-handler",
      imageSizes: {
        "small": 50,
        "large": 100
      },
      pathPrefix: '/api',
      autoAllow: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
