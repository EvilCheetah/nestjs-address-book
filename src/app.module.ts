import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { validationSchema } from '@/validation';
import { get_database_config } from '@/config';
import { CountryModule } from './country/country.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';


@Module({
    imports: [
        ConfigModule.forRoot({ validationSchema }),
        MikroOrmModule.forRootAsync( get_database_config() ),

        CountryModule
    ]
})
export class AppModule {}