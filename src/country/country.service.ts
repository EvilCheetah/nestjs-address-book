import { Injectable } from '@nestjs/common';
import { CreateCountryDTO } from './dto/create-country.dto';
import { UpdateCountryDTO } from './dto/update-country.dto';


@Injectable()
export class CountryService
{
    create(createCountryDTO: CreateCountryDTO)
    {
        return 'This action adds a new country';
    }

    findAll()
    {
        return `This action returns all country`;
    }

    findOne(country_id: number)
    {
        return `This action returns a #${country_id} country`;
    }

    update(country_id: number, updateCountryDTO: UpdateCountryDTO)
    {
        return `This action updates a #${country_id} country`;
    }

    remove(country_id: number)
    {
        return `This action removes a #${country_id} country`;
    }
}