import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private loginservice : LoginService,
    private router: Router) {

   }

  ngOnInit() {
  }
userLoginClick(){
  const params = {
    email:this.username,
    password:this.password
    
  }
  this.loginservice.postLogin(params).subscribe((res)=>{
   console.log(res);
   localStorage.setItem('token',res['token']);
   this.router.navigate(["/table2/table-data"]);
  },(err)=>{
    console.log(err);
  })
   
}


}
