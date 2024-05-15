import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
    loginform!: FormGroup;

    ngOnInit(){
      this.loginform = new FormGroup({
        'userData' : new FormGroup({
          'username' : new FormControl(null,[Validators.required]),
          'email' : new FormControl(null,[Validators.required,Validators.email])
        })
    }
}
