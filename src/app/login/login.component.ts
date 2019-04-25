import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User:any = {};
  constructor(public route:Router) { }

  ngOnInit() {
  }

  //For submiting the form and naviagtes to home(or) dashboard
  onSubmit(){
    this.route.navigate(["./orderPage"])
  }
}
