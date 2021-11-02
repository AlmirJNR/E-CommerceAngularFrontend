import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiDigitalProductService {

  constructor() { }

  async getAllProducts (page: number = 1, itemsPerPage: number = 5) {
    return (await axios.get<any[]>(`https://almirjnr-e-commerce-api.herokuapp.com/api/v1/digitalProduct/allProducts?page=${page}&itemsPerPage=${itemsPerPage}`)).data;
  }

  async getProductByName (digitalProductName: string) {
    return (await axios.get(`https://almirjnr-e-commerce-api.herokuapp.com/api/v1/digitalProduct/byName/${digitalProductName}`)).data;
  }
}
