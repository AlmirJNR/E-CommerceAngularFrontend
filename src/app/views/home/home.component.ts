import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {
    this.userHasToBeLoggedModal();
  }

  userHasToBeLoggedModal() {
    if (!sessionStorage.getItem('userSuccessLoginData')) {
      Swal.fire({
        title: 'Atenção',
        text: 'Você precisa estar logado para acessar os produtos do site',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Fechar',
        cancelButtonColor: '#80000080',
        focusCancel: true,
        confirmButtonText: 'Logar',
        confirmButtonColor: '#00800080',
      }).then((value) => {
        if (value.isConfirmed) {
          location.href='/login';
        }
      });
    }
  }
}
