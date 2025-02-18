import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
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

  public signInform!: FormGroup;
  public errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.signInform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
    });
  }

  public getEmailControl() {
    return this.signInform.get('email');
  }


  public getPasswordControl() {
    return this.signInform.get('password');
  }

  public login() {
    console.log(this.getEmailControl())

    if (this.signInform.invalid) {
      this.signInform.markAsTouched()
      return;
    }

    const payload: LoginModel = {
      email: this.signInform.value.email,
      password: this.signInform.value.password
    }

    this.errorMessage = null;

    this.authService.login(payload).subscribe({
      next: (result: boolean) => {
        this.signInform.reset()
        if (result) {
          this.router.navigate(['/app/posts'])
          console.log('başarılı');
        } else {
          this.errorMessage = 'Email or password is wrong!'
          console.log('başarısız')
        }
      },
      error: (error) => {
        console.error('Login hatası:', error);
        this.errorMessage = 'An error occurred, please try again';
      }
    })
  }


}
