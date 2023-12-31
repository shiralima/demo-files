import { Controller, Post } from '@nestjs/common';
import { FilesType, UploadedFiles, UseFilesHandler } from '@hilma/fileshandler-server';

import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) { }

    @UseFilesHandler()
    @Post('/upload-image')
    async uploadImage(@UploadedFiles() files: FilesType) {
        return this.catService.uploadImage(files);
    }
}
