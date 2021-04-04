import { Component, OnInit } from '@angular/core';
import { DataMap} from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-dynamic-datamaps',
  templateUrl: './dynamic-datamaps.component.html',
  styleUrls: ['./dynamic-datamaps.component.scss']
})
export class DynamicDatamapsComponent implements OnInit {

  ngOnInit(): void {
  }

  data = this.getData();
  countryMap = new DataMap(this.getCountries(), 'id', 'name');
  cityMap = new DataMap(this.getCities(), 'id', 'name');

  constructor() {

      // override cityMap's getDisplayValues method to get cities that
      // correspond to the current item's country
      (this.cityMap as any).getDisplayValues = (dataItem: any) => {
          let validCities = this.getCities().filter(city => city.country == dataItem.country);
          return validCities.map(city => city.name);
      };
  }

  // create some data
  private getData() {
      var cities = this.getCities(),
          data = [];
      for (var i = 0; i < cities.length; i++) {
          data.push({
              country: cities[i].country,
              city: cities[i].id,
              downloads: Math.round(Math.random() * 20000),
              sales: Math.random() * 10000,
              expenses: Math.random() * 5000
          });
      }
      return data;
  }
  private getCountries() {
      return [
          { id: 0, name: 'US' },
          { id: 1, name: 'Germany' },
          { id: 2, name: 'UK' },
          { id: 3, name: 'Japan' },
          { id: 4, name: 'Italy' },
          { id: 5, name: 'Greece' }
      ];
  }
  private getCities() {
      return [
          { id: 0, country: 0, name: 'Washington' },
          { id: 1, country: 0, name: 'Miami' },
          { id: 2, country: 0, name: 'Seattle' },
          { id: 3, country: 1, name: 'Bonn' },
          { id: 4, country: 1, name: 'Munich' },
          { id: 5, country: 1, name: 'Berlin' },
          { id: 6, country: 2, name: 'London' },
          { id: 7, country: 2, name: 'Oxford' },
          { id: 8, country: 2, name: 'Bath' },
          { id: 9, country: 3, name: 'Tokyo' },
          { id: 10, country: 3, name: 'Sendai' },
          { id: 11, country: 3, name: 'Kobe' },
          { id: 12, country: 4, name: 'Rome' },
          { id: 13, country: 4, name: 'Florence' },
          { id: 14, country: 4, name: 'Milan' },
          { id: 15, country: 5, name: 'Athens' },
          { id: 16, country: 5, name: 'Santorini' },
          { id: 17, country: 5, name: 'Thebes' }
      ];
  }

}
