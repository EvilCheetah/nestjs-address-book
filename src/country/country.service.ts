import { Injectable } from '@nestjs/common';
import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

import { Country } from './entities/country.entity';
import { CreateCountryDTO } from './dto/create-country.dto';
import { UpdateCountryDTO } from './dto/update-country.dto';
import { CountryNotFoundException } from './errors/country-not-found.exception';


@Injectable()
export class CountryService
{
    constructor(
        @InjectRepository(Country)
        private readonly countryRepository: EntityRepository<Country>
    ) {}

    async create(createCountryDTO: CreateCountryDTO)
    {
        const country = this.countryRepository.create(createCountryDTO);

        await this.countryRepository.persistAndFlush(country);

        return country;
    }

    find_all()
    {
        return this.countryRepository.findAll();
    }

    async find_one(country_id: number)
    {
        const country = await this.countryRepository.findOne({ country_id });

        if ( !country )
            throw new CountryNotFoundException(country_id);

        return country
    }

    async update(country_id: number, updateCountryDTO: UpdateCountryDTO)
    {
        const country = await this.find_one(country_id);

        wrap(country).assign(updateCountryDTO);
        await this.countryRepository.persistAndFlush(country);

        return country;
    }

    async remove(country_id: number)
    {
        const country = await this.find_one(country_id);

        await this.countryRepository.removeAndFlush(country);

        return country;
    }
}