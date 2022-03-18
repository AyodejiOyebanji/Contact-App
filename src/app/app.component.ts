import { Component } from '@angular/core';
import { studentInterface } from './type/students.interface';
import { userInterface } from './type/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public userName: string =''
  public userEmail : string= ''
  public userPassword: string = ''
  public  userConfirm: string =''
  public myObj: {} ={} 
  public userArray:userInterface[]=[];
  public savedContact?: any

  

  
}
