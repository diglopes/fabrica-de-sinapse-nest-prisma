import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) { }

  create(createPokemonDto: CreatePokemonDto) {
    return this.prisma.pokemon.create({
      data: createPokemonDto,
    })
  }

  findAll() {
    return this.prisma.pokemon.findMany({
      include: {
        Images: {
          select: {
            id: true,
            url: true,
          }
        }
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
