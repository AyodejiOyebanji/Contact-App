import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logEmail: string=''
  public logPassword: string =''
  public allUsers:any=[]
  public found: any ={}
  public index?:any
  public gettUser: any=[]
  

  constructor(private _userService:UsersService, private _router:Router) { }

  ngOnInit(): void {
    this.allUsers=this._userService.getAllUsers()
      
  
  }
  logIn(){
    this.found=this.allUsers.find((val:any, i:any)=>val.userEmail==this.logEmail &&val.userPassword==this.logPassword)

    console.log(this.found);
    if(this.found){
      this.index =this.allUsers.indexOf(this.found)
      console.log(this.index);
      
      localStorage.setItem("currentUser",JSON.stringify(this.found))
      localStorage.setItem("index", JSON.stringify(this.index))
      alert('congratulation')
      this._router.navigate(["/dash-board"])
    }else {
      alert("This user does not exist")
    }
    
  }

}
