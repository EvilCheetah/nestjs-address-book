import { Entity, PrimaryKey, Property } from "@mikro-orm/core";


@Entity()
export class Country
{
    @PrimaryKey()
    country_id:       number;

    @Property({ unique: true })
    country_name:     string;

    @Property({ unique: true, nullable: true, length: 2 })
    two_alpha_abbr:   string;

    @Property({ unique: true, nullable: true, length: 3 })
    three_alpha_abbr: string;
}