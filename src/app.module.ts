import { config } from 'dotenv';
import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { HealthModule } from './health/health.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    HealthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: `${process.env.PG_ENDPOINT}`,
      port: 5432,
      username: `${process.env.PG_USERNAME}`,
      password: `${process.env.PG_PASSWORD}`,
      database: `${process.env.PG_DATABASE}`,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
