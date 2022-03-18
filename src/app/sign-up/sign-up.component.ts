import { JsonPipe } from '@angular/common';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { userInterface } from '../type/user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Output() createAccountChild : any= new EventEmitter() 
  public userName: string =''
  public userEmail : string= ''
  public userPassword: string = ''
  public  userConfirm: string =''
  public myObj: {} ={} 
  public everyUser :any =[]
  public userSavedContact:Array<any>=[]
  
  public userArray:userInterface[]=[]

  
  constructor(private router: Router, private  _userService:UsersService ) { }
  
  ngOnInit(): void {
   this.everyUser=this._userService.getAllUsers()
    
  //  this._userService.allUsers= localStorage["me"]? JSON.parse(localStorage["me"]):[]
    // if(localStorage['Contact_Names']){
    //   this.userArray=JSON.parse(localStorage["'Contact_Names'"])
    // }
    // else{
    //   this.userArray=[]
    // }
    // //or
    //this.userArray=localStorage["Contact_Names"]?JSON.parse(localStorage["Contact_Names"]):[]
    
     console.log(this._userService.getAllUsers());
     
  }

  createAccount(){
    if((this.userName=="")||(this.userEmail=="")||(this.userPassword=="")||(this.userConfirm=="")){
      alert("Fill up details")
      

    }else if ((this.userName=="")&&(this.userEmail=="")&&(this.userPassword=="")&&(this.userConfirm=="")){
      alert("Fill up the missing input")

    }else if(!this.userEmail.includes('@gmail.com')){
      alert("check your email")

    }else if ((this.userPassword !== this.userConfirm)){
      alert("check your password")
     }else {
    //    this.userArray.push(
    //      {
    //       uName: this.userName,
    //       uEmail:this.userEmail,
    //       uPassword: this.userPassword,
    //       cPassword: this.userConfirm 
    //      }
    //    )
    //  }
    //  console.log(this.userArray);
   //  localStorage.setItem("Contact_Names", JSON.stringify(this.userArray))
    //  or
    // localStorage["Contact_Names"] =JSON.stringify(this.userArray)
    //if i dont want to use local storage i can use service below
    let {userName,userEmail, userPassword,userConfirm,userSavedContact}=this
    this._userService.pushUsers({userName,userEmail, userPassword,userConfirm,userSavedContact})

    // localStorage.setItem("me", JSON.stringify(this._userService.allUsers))
     this.router.navigate(['/login'])

     this.userName=''
     this.userEmail=''
     this.userPassword=''
     this.userConfirm=''
     
     }}}
