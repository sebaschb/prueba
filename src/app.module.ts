import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities, { User } from './typeorm';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [ UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      entities,
      synchronize: true,
    }),
    AuthModule,
    PassportModule.register({
      session: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
