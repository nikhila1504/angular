import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts:Contact[];

  constructor() {
    this.contacts=[
      {contactId:101,firstName:"nikki",lastName:"Damaraju",dob:new Date("1998-04-15"),mobileNumber:"9493720887",alternateMobileNumber:"1524954",mailId:"nikki@gmail.com",organization:"cts"},
      {contactId:102,firstName:"nidhi",lastName:"madhupali",dob:new Date("1998-03-15"),mobileNumber:"9493720877",alternateMobileNumber:"1524955",mailId:"nidhi@gmail.com",organization:"capgemini"},
      {contactId:103,firstName:"navi",lastName:"sureddy",dob:new Date("1998-02-12"),mobileNumber:"9493720777",alternateMobileNumber:"15249555",mailId:"navi@gmail.com",organization:"accenture"},
      {contactId:104,firstName:"nini",lastName:"buddana",dob:new Date("1998-01-18"),mobileNumber:"9493727777",alternateMobileNumber:"15245555",mailId:"nini@gmail.com",organization:"ibm"}
    ]
   }
   getAll():Contact[]{
     return this.contacts;
   }
   get(id:number){
     return this.contacts.find((c)=>(c.contactId==id))
   }
   add(contact:Contact){
     this.contacts.push(contact);
   }
   update(contact:Contact){
     let index=this.contacts.findIndex((c)=>(c.contactId===contact.contactId))
     if(index>-1){
       this.contacts[index]=contact;
     }
   }
   delete(contact:Contact){
    let index=this.contacts.findIndex((c)=>(c.contactId===contact.contactId))
    if(index>-1){
      this.contacts.splice(index,1);
   }
}
}
