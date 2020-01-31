import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controllet';

@Module({
  imports: [HttpModule.register({
    rejectUnauthorized: false
  } as any)],
  controllers: [AppController, TodoController, WeatherController],
  providers: [AppService, TodoService, WeatherService],
})
export class AppModule {}
