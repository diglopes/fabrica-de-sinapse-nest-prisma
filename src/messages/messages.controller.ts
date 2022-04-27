import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Message } from './Message';
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

    @Post()
    create(@Body() message: Message) {
        return this.messageService.create(message)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() message: Message) {
        return this.messageService.update(+id, message)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.messageService.delete(+id)
    }
}
