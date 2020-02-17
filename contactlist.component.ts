import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  contacts:Contact[];
  constructor(private contServ:ContactService) { }

  ngOnInit() {
    this.contacts=this.contServ.getAll();
  }
  delete(contactId:Contact){
    if(confirm(`Are you sure of deleting contacts#$(contactId)`)){
      this.contServ.delete(contactId);
    }
  }

}
