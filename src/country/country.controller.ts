import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDTO } from './dto/create-country.dto';
import { UpdateCountryDTO } from './dto/update-country.dto';


@Controller('country')
export class CountryController
{
    constructor(
        private readonly countryService: CountryService
    ) {}


    @Post()
    create(
        @Body()
        createCountryDTO: CreateCountryDTO
    )
    {
        return this.countryService.create(createCountryDTO);
    }


    @Get()
    find_all()
    {
        return this.countryService.find_all();
    }


    @Get(':id')
    find_one(
        @Param('id', ParseIntPipe)
        country_id: number
    )
    {
        return this.countryService.find_one(country_id);
    }

    
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)
        country_id: number,
        
        @Body()
        updateCountryDTO: UpdateCountryDTO
    )
    {
        return this.countryService.update(country_id, updateCountryDTO);
    }


    @Delete(':id')
    remove(
        @Param('id', ParseIntPipe)
        country_id: number
    )
    {
        return this.countryService.remove(country_id);
    }
}