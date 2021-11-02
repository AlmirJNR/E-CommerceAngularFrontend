import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userIsLogged: boolean;
  constructor() {
    if (sessionStorage.getItem('userSuccessLoginData')) {
      this.userIsLogged = true;
    }
    else {
      this.userIsLogged = false;
    }
  }

  ngOnInit(): void {
  }

}
