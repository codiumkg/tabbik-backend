import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  useFactory: () => ({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,
    autoLoadEntities: true,
  }),
};
