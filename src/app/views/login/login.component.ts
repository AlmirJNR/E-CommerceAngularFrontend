import { Component } from '@angular/core';
import { ApiUserService } from '../../services/api-user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiUserService]
})
export class LoginComponent {
  userService: ApiUserService;
  registerUserForm: FormGroup;

  constructor(apiUserService: ApiUserService, private formBuilder: FormBuilder) {
    if (sessionStorage.getItem('userSuccessLoginData')) {
      Swal.fire({
        title: `Olá, ${JSON.parse(sessionStorage.getItem('userSuccessLoginData') || 'error!usuario!').userName}`,
        html: 'Você já está logado<br>Deseja alterar para outra conta?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Não',
        cancelButtonColor: '#80000080',
        confirmButtonText: 'Sim',
        confirmButtonColor: '#00800080',
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isDismissed) {
          this.navigateToHome();
        }
      });
    }

    this.userService = apiUserService;

    this.registerUserForm = this.formBuilder.group({
      userEmail: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(75),
        Validators.email
      ])],
      userPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ])]
    });
  }

  async loginUser() {
    try {
      const loginResponse = await this.userService.doUserLogin(
        this.registerUserForm.value.userEmail,
        this.registerUserForm.value.userPassword
      );

      if (loginResponse) {
        sessionStorage.setItem('userSuccessLoginData', JSON.stringify({
              userName: loginResponse,
              userEmail: this.registerUserForm.value.userEmail
            }));

        Swal.fire({
          title: `Olá, ${JSON.parse(sessionStorage.getItem('userSuccessLoginData') || 'error!usuario!').userName}`,
          text: 'Seja bem-vindo',
          icon: 'success',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#00800080',
          allowOutsideClick: false,
          allowEscapeKey: false,
        }).then((result) => {
          if (result.isConfirmed) {
            this.navigateToHome();
          }
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Falha',
        text: 'Alguma informação que você digitou está errada, tente novamente',
        icon: 'error',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#80000080',
        confirmButtonText: 'Tentar novamente',
        confirmButtonColor: '#00800080',
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isDismissed) {
          this.navigateToHome();
        }
      });
    }
  }

  navigateToHomeModal() {
    Swal.fire({
      title: 'Você deseja sair?',
      text: 'Você será redirecionado para a página inicial',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Não',
      cancelButtonColor: '#80000080',
      confirmButtonText: 'Sim',
      confirmButtonColor: '#00800080',
      focusCancel: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // sessionStorage.setItem('userSuccessLoginData', '');
        this.navigateToHome();
      }
    });
  }

  navigateToHome() {
    location.href = "/home";
  }
}
