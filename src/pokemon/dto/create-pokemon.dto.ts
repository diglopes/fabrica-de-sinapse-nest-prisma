import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { Pokemon } from "../entities/pokemon.entity";

export class CreatePokemonDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    height: number;

    images: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
}
