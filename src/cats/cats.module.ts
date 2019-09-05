import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { CatSchema } from './cats.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatsResolver],
})
export class CatsModule {}
