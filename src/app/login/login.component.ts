import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  invalidLogin!: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    if (this.username === 'ashwinanand33' && this.password === 'Maluachu@123') {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else this.invalidLogin = true;
  }
}
