import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
    email: string = "";
    password: string = "";
    
    constructor(private router: Router){}

    onSubmit(loginForm: NgForm){
        this.router.navigate(['/home']);

    }
    ngOnInit() {
        console.log(this)
        
    }
}