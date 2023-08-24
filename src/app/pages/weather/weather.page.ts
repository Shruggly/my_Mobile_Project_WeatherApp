import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { NavController } from '@ionic/angular';
import { DetailsPagePage } from '../../details-page/details-page.page'; // Adjust the path 
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {
  weatherData: any;
  city: string = 'City Name';

  constructor(
    private weatherService: WeatherService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {}
  
  async getWeather() {
    try {
      const response = await this.weatherService.getWeather(this.city);
      this.weatherData = response.data;
    } catch (error) {
      console.error(error);
    }
  }


//Using city param
  ngOnInit() {
    this.route.params.subscribe(params => {
      const city = params['city'];
    });
  }

  navigateToDetailsPage(city: string) {
    this.navCtrl.navigateForward(`/details/${city}`);
  }
  
}

