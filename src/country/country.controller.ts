import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, HttpCode } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDTO } from './dto/create-country.dto';
import { UpdateCountryDTO } from './dto/update-country.dto';
import { Country } from './entities/country.entity';


@Controller('countries')
export class CountryController
{
    constructor(
        private readonly countryService: CountryService
    ) {}


    @Post()
    create(
        @Body()
        createCountryDTO: CreateCountryDTO
    ): Promise<Country>
    {
        return this.countryService.create(createCountryDTO);
    }


    @Get()
    find_all(): Promise<Country[]>
    {
        return this.countryService.find_all();
    }


    @Get(':id')
    find_one(
        @Param('id', ParseIntPipe)
        country_id: number
    ): Promise<Country>
    {
        return this.countryService.find_one(country_id);
    }

    
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)
        country_id: number,
        
        @Body()
        updateCountryDTO: UpdateCountryDTO
    ): Promise<Country>
    {
        return this.countryService.update(country_id, updateCountryDTO);
    }


    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(
        @Param('id', ParseIntPipe)
        country_id: number
    ): Promise<void>
    {
        return this.countryService.remove(country_id);
    }
}