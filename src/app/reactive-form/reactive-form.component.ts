import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private userService:UserService) { }

  user:User;

  isValidFormSubmited = null;

  userForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    city: new FormControl('')
  });

  ngOnInit(): void {
  }

  onFormSubmit(){
    this.isValidFormSubmited = false;

    this.user = this.userForm.value;
    this.userService.createUser(this.user);
  }

  get name(){
    let n = this.userForm.get('name');
    if(n){
      console.log(n.errors.minlength);
    }
    return this.userForm.get('name');
  }
  
  get city(){
    return this.userForm.get('city');
  }

}