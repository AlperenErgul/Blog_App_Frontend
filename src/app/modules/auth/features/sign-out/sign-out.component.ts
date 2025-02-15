import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-out',
  imports: [],
  templateUrl: './sign-out.component.html',
  standalone: true,
  styleUrl: './sign-out.component.css'
})
export class SignOutComponent implements OnInit{

  countdown: number = 3;
  countdownInterval: any;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    this.countdownInterval = setInterval(() => {
      if (this.countdown > 1) {
        this.countdown--;
        document.getElementById('countdown')!.innerText = this.countdown.toString();
      } else {
        clearInterval(this.countdownInterval);
        this.router.navigate(['/sign-in']);
      }
    }, 1000);
  }

}
