import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TokenController } from './token/token.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'lab',
      password: 'lab',
      database: 'lab',
      autoLoadEntities: true,
      //entities: [],
      synchronize: true
    }),
    UsersModule
  ],
  controllers: [AppController, TokenController],
  providers: [AppService],
})
export class AppModule {}
