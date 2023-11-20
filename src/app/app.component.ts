import { CountryInfo } from './Country-Info';
import { Component} from '@angular/core';
import { CountryInfoService } from './services/country-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interactive-world-map';
  countryInfo: CountryInfo = new CountryInfo();

  constructor(private countryInfoService: CountryInfoService) {}

  getCountryInfo(countryCode: string) {
    this.countryInfoService.getCountryInfo(countryCode).subscribe(value => this.countryInfo = value[1][0]);

    console.log(this.countryInfo);
  }


}
