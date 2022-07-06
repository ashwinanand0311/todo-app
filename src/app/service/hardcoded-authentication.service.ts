import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string): boolean {
    if (username === 'ashwinanand33' && password === 'Maluachu@123') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logOutUser() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
