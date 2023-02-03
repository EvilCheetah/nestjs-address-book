import { faker } from "@faker-js/faker";
import { Country } from "src/country/entities/country.entity";


export function country_stub(): Country
{
    return {
        country_id:       1,
        country_name:     'United States',
        two_alpha_abbr:   'US',
        three_alpha_abbr: 'USA'
    }
}