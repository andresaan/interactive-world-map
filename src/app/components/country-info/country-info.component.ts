import { Component, Input } from '@angular/core';
import { CountryInfo } from '../../Country-Info';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css'
})

export class CountryInfoComponent {
  
  @Input() CountryInfo: CountryInfo = new CountryInfo();

}
