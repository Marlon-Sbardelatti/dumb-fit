import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  constructor(public router: Router) { }
  user = {
    name: "",
    password: "",
  };
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
  ngOnInit() {
    let user = localStorage.getItem("user");
    if (user) {
      this.user = JSON.parse(user);
    }
  }
}
