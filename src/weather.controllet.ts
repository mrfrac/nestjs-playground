import { Controller, Get, Param } from "@nestjs/common";
import { get } from "http";
import { WeatherService } from "./weather.service";

@Controller("weather")
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {}

    @Get(":id")
    public async getWeather(@Param("id") id: string) {
        return await this.weatherService.get(parseInt(id, 10)).toPromise();
    }
}