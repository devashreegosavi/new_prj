import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
    loginform!: FormGroup;
    organization : any = ['org1', 'org2', 'org3', 'org4'];

    ngOnInit(){
      this.loginform = new FormGroup({
        'userData' : new FormGroup({
          'orgname' : new FormControl(null,[Validators.required]),
          'username' : new FormControl(null,[Validators.required]),
          'password' : new FormControl(null,[Validators.required])
        })
      });
      
    }

    constructor(private router : Router){

    }
    onSubmit(){
      console.log(this.loginform.value);
      this.loginform.reset();
      this.router.navigate(['/home']);
    }
}
