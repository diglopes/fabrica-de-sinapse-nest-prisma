import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {

    private messages = [
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
}
