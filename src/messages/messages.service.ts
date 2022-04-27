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

    async findById(id: number) {
        const msg = this.messages.find(message => message.id === id)
        if (!msg) {
            throw Error(`Message with id ${id} not found`)
        }
        return
    }

    create(message: Message) {
        this.messages.push(message)
    }

    update(id: number, message: Message) {
        const index = this.messages.findIndex(message => message.id === id)
        this.messages[index] = message
    }

    async delete(id: number) {
        const index = this.messages.findIndex(message => message.id === id)

        if (index < 0) {
            throw Error(`Message with id ${id} not found`)
        }

        this.messages.splice(index, 1)
    }
}
