import { Injectable } from '@angular/core';
import { Ventes } from './data/data';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor() { }

  getAllVente(){
    return Ventes
  }
}
