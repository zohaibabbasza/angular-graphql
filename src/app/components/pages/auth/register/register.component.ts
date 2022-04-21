import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService:AuthService) {}

  ngOnInit(): void {}

  onSubmit() {

    const user = {
      username: this.username,
      password: this.password
    };
    this.authService.registerUser(user)
    this.username = '';
    this.email = '';
    this.password = '';
  }
}
