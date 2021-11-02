import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiPhysicalProductService {

  constructor() { }

  async getAllProducts (page: number = 1, itemsPerPage: number = 5) {
    return (await axios.get<any[]>(`${environment.apiUrl}/physicalProduct/allProducts?page=${page}&itemsPerPage=${itemsPerPage}`)).data;
  }

  async getProductByName (physicalProductName: string) {
    return (await axios.get(`${environment.apiUrl}/physicalProduct/byName/${physicalProductName}`)).data;
  }
}
