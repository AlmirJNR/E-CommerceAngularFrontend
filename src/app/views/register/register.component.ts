import { Component } from '@angular/core';
import { ApiUserService } from '../../services/api-user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ApiUserService]
})
export class RegisterComponent {
  userService: ApiUserService;

  registerUserForm: FormGroup;

  constructor(apiUserService: ApiUserService, private formBuilder: FormBuilder) {
    this.userService = apiUserService;

    this.registerUserForm = this.formBuilder.group({
      userName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(75)
      ])],
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

  async registerUser() {
    const registerResponse = await this.userService.setNewUser(
      this.registerUserForm.value.userName,
      this.registerUserForm.value.userEmail,
      this.registerUserForm.value.userPassword
    );
    if (registerResponse) {
      Swal.fire({
        title: `Olá ${this.registerUserForm.value.userName}`,
        text: 'Você foi cadastrado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#00800080',
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.value) {
          location.href = "/login";
        }
      });
    }
    else {
      Swal.fire({
        title: `${this.registerUserForm.value.userEmail}`,
        text: 'Ocorreu um erro ao registrar',
        icon: 'error',
        showCancelButton: true,
        cancelButtonText: 'Sair',
        cancelButtonColor: '#80000080',
        confirmButtonText: 'Tentar novamente',
        confirmButtonColor: '#00800080',
        focusCancel: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.dismiss) {
          location.href = '/home';
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
      if (result.value) {
        // sessionStorage.setItem('userSuccessLoginData', '');
        location.href = '/home';
      }
    });
  }

  navigateToRegister() {
    location.href = '/register';
  }
}
