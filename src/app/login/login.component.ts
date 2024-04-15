import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [RouterLink, FormsModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css",
})
export class LoginComponent {
	constructor(public router: Router) {}

	user = {
		name: "",
		password: "",
	};

	goToPage(pageName: string) {
		if (
			this.user.name == "" ||
			(this.user.name == undefined && this.user.password == "") ||
			this.user.password == undefined
		) {
			alert("Preencha todos os campos");
		} else if (this.user.name == "" || this.user.name == undefined) {
			alert("Preencha o nome de usuário");
		} else if (this.user.password == "" || this.user.password == undefined) {
			alert("Preencha a senha");
		} else {
			localStorage.setItem("user", JSON.stringify(this.user));
			this.router.navigate([`${pageName}`]);
		}
	}

	verifyUser(user: { name: string; password: string }): string {
		if (
			user.name == "" ||
			(user.name == undefined && user.password == "") ||
			user.password == undefined
		) {
			return "Preencha todos os campos";
		} else if (user.name == "" || user.name == undefined) {
			return "Preencha o nome de usuário";
		} else if (user.password == "" || user.password == undefined) {
			return "Preencha a senha";
		}

		return "test";
	}

	showPassword() {
		let pswInput = document.getElementById(
			"password-field",
		) as HTMLInputElement;
		let button = document.getElementById("password-button");
    console.log(button)
		if (pswInput.type === "password") {
			pswInput.type = "text";
			button?.classList.add("checked");
		} else {
			pswInput.type = "password";
			button?.classList.remove("checked");
		}
	}
}
