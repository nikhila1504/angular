import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {
  private contact:Contact;
  constructor( private contServ:ContactService,
    private routeData:ActivatedRoute){ 

    
  }

  ngOnInit() {
    this.routeData.params.subscribe(
      (params)=>{
        let contactId=params['id'];
        if(contactId){
          this.contact=this.contServ.get(contactId);
        }
      }
    )
  }

}
