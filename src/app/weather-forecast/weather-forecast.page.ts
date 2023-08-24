import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.page.html',
  styleUrls: ['./weather-forecast.page.scss'],
})
export class WeatherForecastPage {
  city: string = '';
  forecastData: any;

  constructor(private http: HttpClient) {}

  async getForecast() {
    try {
      const apiKey = '4db0f5e47b6d936890fac0b9011d3b47'; // Replace with your weather API key
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${apiKey}`;
      const forecastResponse = await this.http.get(forecastUrl).toPromise();
      this.forecastData = forecastResponse;
    } catch (error) {
      console.error(error);
    }
  }
}
