import { NotFoundException } from "@nestjs/common";


export class CountryNotFoundException extends NotFoundException
{
    constructor(country_id: number)
    {
        super(`Country with id '${country_id}' was NOT FOUND`);
    }
}