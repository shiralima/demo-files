import { FilesType, ImageService } from '@hilma/fileshandler-server';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  constructor(
    private readonly imageService: ImageService
  ) { }

  async uploadImage(files: FilesType) {
    console.log('files: ', files);
    try {

      const path = await this.imageService.saveSingleFile(files);
      console.log('path: ', path);
      return path;
    } catch (e) {
      console.log('err', e);

    }
  }
}
