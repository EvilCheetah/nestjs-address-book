import { defineConfig } from "@mikro-orm/core";
import { ConfigService } from "@nestjs/config";

import { Country } from "src/country/entities/country.entity";


const config = new ConfigService();


export default defineConfig({
    type:    'postgresql',
    host:     config.get('DB_HOST'),
    port:     config.get('DB_PORT'),
    user:     config.get('DB_USERNAME'),
    password: config.get('DB_PASSWORD'),
    dbName:   config.get('DB_DATABASE'),
    entities: [
        Country
    ]
});