import { Prisma } from "@prisma/client";

export class Image implements Prisma.ImageUncheckedCreateInput {
    id?: number;
    url: string;
    pokemonId: number;
}
