import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  togglePassword() {
    throw new Error('Method not implemented.');
  }
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';
  showPassword: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      return;
    }

    // Simulación de autenticación
    const { email, password } = this.loginForm.value;
    if (email === 'admin@tienda.com' && password === '123456') {
      this.router.navigate(['/productos']); // Redirige a la tienda después del login
    } else {
      this.errorMessage = 'Correo o contraseña incorrectos.';
    }
  }
}
