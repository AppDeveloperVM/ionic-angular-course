import { Injectable } from '@angular/core';

import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Japan',
      'An incredible place on the earth',
      'https://static.timesofisrael.com/www/uploads/2019/03/iStock-1060517676-e1553784733101.jpg',
      400
      ),
    new Place(
      'p2',
      'New York',
      'the Big City!',
      'https://super7.com.do/storage/app/uploads/public/5e2/349/c64/5e2349c643bc3799193733.jpg',
      155
      ),
    new Place(
      'p3',
      'Barcelona',
      'Spanish lands',
      'https://sociallifemagazine.com/wp-content/uploads/2019/05/GettyImages-492706953-58f517d35f9b581d599b8e8e.jpg',
      90
      )
  ];
  get places() {
    return [...this._places];
  }

  constructor() { }
}
