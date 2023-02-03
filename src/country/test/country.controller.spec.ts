import { Test } from "@nestjs/testing";
import { CountryController } from "../country.controller";
import { CountryService } from "../country.service";
import { CreateCountryDTO } from "../dto/create-country.dto";
import { UpdateCountryDTO } from "../dto/update-country.dto";
import { Country } from "../entities/country.entity";
import { countries_stub } from "./stubs/contries.stub";
import { country_stub } from "./stubs/country.stub";


jest.mock('../country.service');


describe('CountryController', () => {
    let countryController: CountryController;
    let countryService:    CountryService;


    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [CountryController],
            providers:   [CountryService]
        }).compile();

        countryController = moduleRef.get<CountryController>(CountryController);
        countryService    = moduleRef.get<CountryService>(CountryService);
        jest.clearAllMocks();
    })


    it('should be defined', () => {
        expect(countryController).toBeDefined();
    });


    describe('create method', () => {
        let country:          Country;
        let createCountryDTO: CreateCountryDTO;

        beforeEach(async () => {
            createCountryDTO = {
                country_name:     country_stub().country_name,
                two_alpha_abbr:   country_stub().two_alpha_abbr,
                three_alpha_abbr: country_stub().three_alpha_abbr
            };

            country = await countryController.create(createCountryDTO);
        });

        it('should call countryService', () => {
            expect(countryService.create).toBeCalledWith(createCountryDTO);
        });

        it('should return a country', () => {
            expect(country).toEqual( country_stub() )
        });
    });


    describe('find_all method', () => {
        let countries: Country[];

        beforeEach(async () => {
            countries = await countryController.find_all();
        });

        it('should call countryService', () => {
            expect(countryService.find_all).toHaveBeenCalled();
        });

        it('should return a list of countries', () => {
            expect(countries).toEqual(countries_stub());
        });
    })

    
    describe('find_one method', () => {
        let country: Country;

        beforeEach(async () => {
            country = await countryController.find_one( country_stub().country_id );
        });

        it('should call countryService', () => {
            expect(countryService.find_one).toBeCalledWith(
                country_stub().country_id
            );
        });

        it('should return a country', () => {
            expect(country).toEqual( country_stub() );
        });
    });


    describe('update method', () => {
        let country:          Country;
        let updateCountryDTO: UpdateCountryDTO;

        beforeEach(async () => {
            updateCountryDTO = {
                country_name:     'Canada',
                two_alpha_abbr:   'CA',
                three_alpha_abbr: 'CAN'
            };

            country = await countryController.update(
                country_stub().country_id,
                updateCountryDTO
            );
        });

        it('should call countryService', () => {
            expect(countryService.update).toBeCalledWith(
                country_stub().country_id,
                updateCountryDTO
            );
        });

        it('should return a country', () => {
            expect(country).toEqual( country_stub() );
        });
    });


    describe('remove method', () => {
        let result: void;

        beforeEach(async () => {
            result = await countryController.remove( country_stub().country_id );
        });

        it('should call countryService', () => {
            expect(countryService.remove).toBeCalledWith(country_stub().country_id);
        });

        it('should return nothing', () => {
            expect(result).toBeUndefined();
        });
    });
});