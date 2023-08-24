import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { NavController } from '@ionic/angular';
import { DetailsPagePage } from '../../details-page/details-page.page'; // Adjust the path 
import { ActivatedRoute } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';

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
    (await this.weatherService.getWeather(this.city)).subscribe(
      (data: any) => {
        this.weatherData = data;
        // Handle the data here
        console.log(data); // Log the data to the console as an example
      },
      (error: any) => {
        // Handle errors here
        console.error(error); // Log the error to the console as an example
      }
    );
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

