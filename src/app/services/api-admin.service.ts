import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiAdminService {

  constructor() { }

  async getAllUsers() {
    return (await axios.get(`https://almirjnr-e-commerce-api.herokuapp.com/api/v1/admin/allUsers`)).data;
  }
  async getUserByEmail(email: string) {
    return (await axios.get(`https://almirjnr-e-commerce-api.herokuapp.com/api/v1/admin/${email}`)).data;
  }
}
