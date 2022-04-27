import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
}
