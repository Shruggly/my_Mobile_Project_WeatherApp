import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //Redirict
    redirectTo: 'weather', 
    pathMatch: 'full'
  },
  {
    path: 'weather',
    loadChildren: () => import('./pages/weather/weather.module').then(m => m.WeatherPageModule)
  },
  {
    path: 'details/:city',
    loadChildren: () => import('./details-page/details-page.module').then(m => m.DetailsPagePageModule)
  },
  {
    path: 'weather-forecast',
    loadChildren: () => import('./weather-forecast/weather-forecast.module').then( m => m.WeatherForecastPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
