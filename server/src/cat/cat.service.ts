import { Injectable } from '@nestjs/common';
import { FilesType, ImageService } from '@hilma/fileshandler-server';

@Injectable()
export class CatService {
  constructor(
    private readonly imageService: ImageService
  ) { }

  async uploadImage(files: FilesType) {
    try {
      const path = await this.imageService.saveSingleFile(files);
      return path;
    } catch (err) {
      console.error('err', err);
    }
  }
}
