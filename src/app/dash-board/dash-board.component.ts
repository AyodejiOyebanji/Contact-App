
import { Component, OnInit } from '@angular/core';
import { contactty} from '../type/user.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  public fName: string ="";
  public lName: string ="";
  public phoneNumber?: number;
  public Email :string =""
  public title :string =''
  public rel :string =""
  public allUsers:any
  public index:any
  public myArray:any
  public userName:any
  public contactDetails:any

  public phonnyObj: {}={};
  public phonny:contactty[]=[];
  public savedContact ?: any 
  public disp?:any
  

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.allUsers =localStorage['localContact']? JSON.parse(localStorage["localContact"]):[]
    this.index= localStorage.getItem("index")
    this.myArray= this.allUsers[this.index]

    this.userName =this.myArray.userName
    this.disp= this.myArray.userSavedContact
    console.log(this.disp);
    


    


  }

  saveContact(){
    if((this.fName=="" )&& (this.lName=="")&&(this.phoneNumber==0)&&(this.Email=="")&&(this.title=="")){
      alert("Fill up your contact details details")

    } else if((this.fName=="" )|| (this.lName=="")||(this.phoneNumber==0)||(this.Email=="")||(this.title=="")){
  alert(" Complete!!")
    } else{
      this.contactDetails={
        name_one : this.fName,
        name_Two: this.lName,
        Phone_no: this.phoneNumber,
        email: this.Email,
        title: this.title,
        relationship:this.rel

      }
      this.allUsers[this.index].userSavedContact.push(this.contactDetails)
      localStorage.setItem('localContact', JSON.stringify(this.allUsers))
      
    }
    
    this.router.navigate(["/dash-board"]) 
this.fName=""
this.lName=""
this.phoneNumber=0
this.Email=""
this.title=''
this.rel=''


  }

//   addContact(){
//     this.phonny = localStorage[ "myContact"]? JSON.parse(localStorage["myContact"]) : []
//     this.savedContact =JSON.parse(localStorage["myContact"])
    

//    this.phonny.push({
//      firstName:this.fName,
//      secondName:this.lName,
//      phoneName: this.pNumber


//     })
// console.log( this.phonny);
// localStorage.setItem("myContact", JSON.stringify(this.phonny) )
// this.fName =''
// this.lName=''
//  this.pNumber =''

//   }

//   moreDetails(i:any){
//     console.log(this.savedContact);
    

    
//   }

}
