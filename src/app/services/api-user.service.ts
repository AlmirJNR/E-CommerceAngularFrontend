import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  constructor() { }

  async setNewUser(name: string, email: string, password: string) {
    try {
      const serverResponse = (await axios.post(`${environment.apiUrl}/user/register/`, {name, email, password})).status;

      return serverResponse === 201;
    }
    catch {
      return false;
    }
  }

  async doUserLogin(email: string, password: string) {
    const serverResponse = (await axios.post(`${environment.apiUrl}/user/login/`, {email, password}));

    if ((serverResponse.status) === 200) {
      return serverResponse.data;
    }
    return null;
  }
}
