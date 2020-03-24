import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(){}

  createUser(user:User) { 
    console.log("Name: " + user.name);
    console.log("City: " + user.city);
  }

}
