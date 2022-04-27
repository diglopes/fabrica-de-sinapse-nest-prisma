import { Controller, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private messageService: MessagesService) { }
    @Get()
    findAll() {
        return this.messageService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.messageService.findById(+id)
    }
}