import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  username: string = '';

  constructor() { }

  setUser(name: string){
   this.username = name;
  }

  getUser(): string{
      return this.username;
  }
}
