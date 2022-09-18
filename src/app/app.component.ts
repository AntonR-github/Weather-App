import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'WeatherApp';
   
  cityName: string = 'Jerusalem'
  weatherData: WeatherData;
  userTime: Date = new Date();

  constructor(private weatherService: WeatherService){

  }



  ngOnInit(): void{
   this.getWeatherData(this.cityName);
   this.cityName = '';
   console.log(this.userTime);
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
   .subscribe({
    next: (response) => {
      this.weatherData = response;
      console.log(response)}
   })
  }
}
