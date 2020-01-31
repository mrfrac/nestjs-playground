import { Injectable, HttpService } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";

@Injectable()
export class WeatherService {
    public constructor(private readonly httpService: HttpService) {}

    get(id: number): Observable<AxiosResponse<any>> {
        return this.httpService.get(`https://www.metaweather.com/api/location/${id}/`);
    }
}