import { Country } from "src/country/entities/country.entity";
import { country_stub } from "./country.stub";


export function countries_stub(): Country[]
{
    return [
        country_stub(),
        {
            country_id:        2,
            country_name:     'Canada',
            two_alpha_abbr:   'CA',
            three_alpha_abbr: 'CAN'
        },
        {
            country_id:        3,
            country_name:     'Argentina',
            two_alpha_abbr:   'AR',
            three_alpha_abbr: 'ARG'
        }
    ]
}