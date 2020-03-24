import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl:'./template-driven-form.component.html',
  styles:[`.success{color:green}`,`.error{color:red}`]
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor(private userService:UserService) { }

  isValidFormSubmitted:boolean = null;

  user:User = new User();

  ngOnInit(): void {
  }

  onFormSubmit(form:NgForm){

    this.isValidFormSubmitted = false;
    if(form.invalid){
      return;
    }
    this.isValidFormSubmitted = true;
    this.user = form.value;
    this.userService.createUser(this.user);
  }

}
