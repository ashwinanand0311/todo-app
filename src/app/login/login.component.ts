import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  invalidLogin!: boolean;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    if (this.username === 'ashwinanand33' && this.password === 'Maluachu@123')
      this.invalidLogin = false;
    else this.invalidLogin = true;
  }
}
