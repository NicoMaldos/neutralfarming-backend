import { Prisma } from '@prisma/client';

export class SoilSample implements Prisma.SoilSampleCreateInput {
  id: number;
  coordinate: number[];
  date: Date;
}
