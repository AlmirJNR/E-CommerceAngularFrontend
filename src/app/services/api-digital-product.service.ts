import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiDigitalProductService {

  constructor() { }

  async getAllProducts (page: number = 1, itemsPerPage: number = 5) {
    return (await axios.get<any[]>(`${process.env.HEROKU_ECOMMERCE_API}/digitalProduct/allProducts?page=${page}&itemsPerPage=${itemsPerPage}`)).data;
  }

  async getProductByName (digitalProductName: string) {
    return (await axios.get(`${process.env.HEROKU_ECOMMERCE_API}/digitalProduct/byName/${digitalProductName}`)).data;
  }
}
