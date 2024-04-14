import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public router: Router) { }

  user = {
    name: '',
    password: ''
  }

  goToPage(pageName: string) {
    localStorage.setItem("user", JSON.stringify(this.user));
    this.router.navigate([`${pageName}`]);
  }

}
