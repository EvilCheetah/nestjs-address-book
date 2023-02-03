import { countries_stub } from "../test/stubs/contries.stub";
import { country_stub } from "../test/stubs/country.stub";


export const CountryService = jest.fn().mockReturnValue({
    create:   jest.fn().mockResolvedValue( country_stub() ),
    find_all: jest.fn().mockResolvedValue( countries_stub() ),
    find_one: jest.fn().mockResolvedValue( country_stub() ),
    update:   jest.fn().mockResolvedValue( country_stub() ),
    remove:   jest.fn().mockResolvedValue( undefined )
});