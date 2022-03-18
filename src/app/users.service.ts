import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
public allUsers: any =[]
  constructor() { }
  getAllUsers(){
    if(localStorage['localContact']){
      this.allUsers= JSON.parse(localStorage["localContact"])
    }else{
      this.allUsers =[]

    }
    return this.allUsers
  }
  pushUsers(userDetails:any){
    this.allUsers.push(userDetails)
    console.log(this.allUsers);
    //localStorage.setItem("me", JSON.stringify(this._userService.allUsers))
    localStorage["localContact"] = JSON.stringify(this.allUsers)
    
  }
}
