import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { validationSchema } from '@/validation';
import { CountryModule } from './country/country.module';


@Module({
    imports: [
        ConfigModule.forRoot({ validationSchema }),

        CountryModule
    ]
})
export class AppModule {}