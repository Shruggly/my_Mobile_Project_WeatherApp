import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Http } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '4db0f5e47b6d936890fac0b9011d3b47';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  constructor() {}

  async getWeather(city: string) {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
    return await Http['request']({
      method: 'GET',
      url: url,
    });
  }
}

