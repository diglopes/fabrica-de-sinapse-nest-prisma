import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { MessagesModule } from './messages/messages.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [MessagesModule, PokemonModule],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessagesService],
})
export class AppModule { }
