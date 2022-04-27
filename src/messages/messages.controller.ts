import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';
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
            .catch(err => { throw new NotFoundException(err.message) })
    }

    @Post()
    create(@Body() message: MessageDto) {
        return this.messageService.create(message)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() message: MessageDto) {
        return this.messageService.update(+id, message)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.messageService.delete(+id)
            .catch(err => { throw new NotFoundException(err.message) })
    }
}
