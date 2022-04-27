import { Injectable } from '@nestjs/common';
import { Message } from './Message';

@Injectable()
export class MessagesService {

    private messages: Message[] = [
        {
            id: 1,
            text: 'first message'
        },
        {
            id: 2,
            text: 'second message'
        },
        {
            id: 3,
            text: 'third message'
        }
    ]

    findAll() {
        return this.messages
    }

    findById(id: number) {
        return this.messages.find(message => message.id === id)
    }

    create(message: Message) {
        this.messages.push(message)
    }

    update(id: number, message: Message) {
        const index = this.messages.findIndex(message => message.id === id)
        this.messages[index] = message
    }
}
