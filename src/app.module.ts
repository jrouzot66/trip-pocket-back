import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'trip',
      entities: [User],
      synchronize: true, // À désactiver en production
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}