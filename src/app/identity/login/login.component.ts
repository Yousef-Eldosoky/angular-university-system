import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IdentityService } from '../identity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup<{email: FormControl<string | null>, password: FormControl<string | null>}>;
  submitted = false;
  loggingError?: string;

  constructor(private formBuilder: FormBuilder, private identity: IdentityService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Getter for easier access to form controls
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    // Implement login logic, API call
    this.identity.login(this.loginForm.value).subscribe(
      {
        error: () => {
          this.loggingError = "Email or password is incorrect!";
        },
        complete: () => {
          console.log('Login successful', this.loginForm.value);
          window.location.reload();
        }
      }
    );
  }

}
