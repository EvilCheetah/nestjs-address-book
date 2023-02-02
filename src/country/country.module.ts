import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Country } from './entities/country.entity';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';


@Module({
    imports:     [MikroOrmModule.forFeature([ Country ])],
    controllers: [CountryController],
    providers:   [CountryService]
})
export class CountryModule {}