import { Migration } from '@mikro-orm/migrations';


export class Migration20230202053853 extends Migration
{
    async up(): Promise<void>
    {
        this.addSql(`
            CREATE TABLE "country" (
                "country_id"        SERIAL PRIMARY KEY,
                "country_name"      VARCHAR(255) NOT NULL,
                "two_alpha_abbr"    VARCHAR(2) NULL,
                "three_alpha_abbr"  VARCHAR(3) NULL
            );
        `);

        this.addSql(`
            ALTER TABLE "country"
            ADD CONSTRAINT "country_country_name_unique" 
            UNIQUE ("country_name");
        `);

        this.addSql(`
            ALTER TABLE "country"
            ADD CONSTRAINT "country_two_alpha_abbr_unique" 
            UNIQUE ("two_alpha_abbr");
        `);

        this.addSql(`
            ALTER TABLE "country"
            ADD CONSTRAINT "country_three_alpha_abbr_unique"
            UNIQUE ("three_alpha_abbr");
        `);
    }

    async down(): Promise<void>
    {
        this.addSql(`
            DROP TABLE IF EXISTS "country"
            CASCADE;
        `);
    }
}