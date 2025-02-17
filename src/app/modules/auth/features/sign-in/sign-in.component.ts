import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../data-acces/services';
import {LoginModel} from '../../models';

@Component({
  selector: 'app-sign-in',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.component.html',
  standalone: true,
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {

  public signInform!: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.signInform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
    });
  }

  public login() {
    if (this.signInform.invalid) {
      return;
    }

    const payload: LoginModel = {
      email: this.signInform.value.email,
      password: this.signInform.value.password
    }

    console.log(payload);

    this.authService.login(payload).subscribe({
      next: (result: boolean) => {
        if (result) {
          console.log('başarılı')
        } else {
          console.log('başarısız')
        }
      },
      error: (error) => {
        console.error('Login hatası:', error);
      }
    })
  }


}
