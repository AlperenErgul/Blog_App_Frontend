import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../data-acces/services';
import {RegisterModel} from '../../models';

@Component({
  selector: 'app-sign-up',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './sign-up.component.html',
  standalone: true,
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  public signUpForm!: FormGroup;
  public errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(6), Validators.maxLength(50)]],
      passwordAgain: ['', [Validators.required, Validators.maxLength(6), Validators.maxLength(50)]]
    })
  }

  public getEmailControl() {
    return this.signUpForm.get('email');
  }

  public getNameControl() {
    return this.signUpForm.get('name');
  }

  public getPasswordControl() {
    return this.signUpForm.get('password');
  }

  public getPasswordAgainControl() {
    return this.signUpForm.get('passwordAgain');
  }

  signUp() {

    if (this.signUpForm.invalid) {
      this.signUpForm.markAsTouched()
      return;
    }

    this.errorMessage = null;

    if (this.signUpForm.value.password !== this.signUpForm.value.passwordAgain) {
      this.errorMessage = 'password and password again should be same';
      return;
    }

    const payload: RegisterModel = {
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password
    }

    this.authService.register(payload).subscribe({
      next: (result: boolean) => {
        this.signUpForm.reset();
        if (result){
          this.router.navigate(['sign-in'])
        }
        else {
          this.errorMessage = 'This account already exist';
        }
      },
      error: (error) => {
        this.errorMessage = 'An error occurred, please try again';
      }
    });

  }

}
