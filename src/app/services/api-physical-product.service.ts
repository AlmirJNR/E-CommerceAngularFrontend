import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiPhysicalProductService {

  constructor() { }

  async getAllProducts (page: number = 1, itemsPerPage: number = 5) {
    return (await axios.get<any[]>(`${process.env.HEROKU_ECOMMERCE_API}/physicalProduct/allProducts?page=${page}&itemsPerPage=${itemsPerPage}`)).data;
  }

  async getProductByName (physicalProductName: string) {
    return (await axios.get(`${process.env.HEROKU_ECOMMERCE_API}/physicalProduct/byName/${physicalProductName}`)).data;
  }
}
