import { Injectable } from '@nestjs/common';
import { FilesType, ImageService } from '@hilma/fileshandler-server';

@Injectable()
export class CatService {
  constructor(
    private readonly imageService: ImageService
  ) { }

  async uploadImage(files: FilesType) {
    console.log('files: ', files);
    try {

      const path = await this.imageService.saveSingleFile(files);
      return path;
    } catch (e) {
      console.error('err', e);

    }
  }
}
