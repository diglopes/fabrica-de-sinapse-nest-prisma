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
    return this.prisma.pokemon.findMany();
  }

  findOne(id: number) {
    return this.prisma.pokemon.findUnique({
      where: { id },
      include: {
        images: {
          select: {
            id: true,
            url: true,
          }
        }
      }
    })
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return this.prisma.pokemon.update({
      where: { id },
      data: updatePokemonDto,
    })
  }

  remove(id: number) {
    return this.prisma.pokemon.delete({
      where: { id },
    })
  }
}
