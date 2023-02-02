import { Transform } from "class-transformer";
import { IsISO31661Alpha2, IsISO31661Alpha3, IsOptional, IsString } from "class-validator";


export class CreateCountryDTO
{
    @IsString()
    country_name:     string;

    @IsISO31661Alpha2()
    @IsOptional()
    @Transform( ({ value }) => (value.toUpperCase()) )
    two_alpha_abbr:   string;

    @IsISO31661Alpha3()
    @IsOptional()
    @Transform( ({ value }) => (value.toUpperCase()) )
    three_alpha_abbr: string;
}