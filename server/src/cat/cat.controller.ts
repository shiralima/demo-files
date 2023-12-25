import { Body, Controller, Post, Req } from '@nestjs/common';
import { CatService } from './cat.service';
import { FilesType, UploadedFiles, UseFilesHandler } from '@hilma/fileshandler-server';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) { }

    @UseFilesHandler(20)//todo check what error
    @Post('/upload-image')
    async uploadImage(@UploadedFiles() files: FilesType, @Req() req) {
        if (req.body.data) console.log('in');
        console.log('req.body : ', req.body);
        return this.catService.uploadImage(files);
    }
}
