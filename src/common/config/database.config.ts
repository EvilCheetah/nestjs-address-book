import { MikroOrmModuleAsyncOptions } from "@mikro-orm/nestjs";
import { ConfigModule, ConfigService } from "@nestjs/config";


export function get_database_config(): MikroOrmModuleAsyncOptions
{
    return {
        useFactory: (config: ConfigService) =>
        ({
            type:    'postgresql',
            host:     config.get('DB_HOST'),
            port:     config.get('DB_PORT'),
            user:     config.get('DB_USERNAME'),
            password: config.get('DB_PASSWORD'),
            dbName:   config.get('DB_DATABASE'),
            entities: [

            ]
        }),
        imports: [ ConfigModule ],
        inject:  [ ConfigService ]
    }
}