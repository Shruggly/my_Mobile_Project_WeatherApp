import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.page.html',
  styleUrls: ['./details-page.page.scss'],
})
export class DetailsPagePage implements OnInit {
  weatherData: any;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const city = params['city'];
      this.weatherService.getWeather(city).then(response => {
        this.weatherData = response.data;
      }).catch(error => {
        console.error(error);
      });
    });
  }

}
