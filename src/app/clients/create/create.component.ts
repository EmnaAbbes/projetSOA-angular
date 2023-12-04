import { Component, ViewChild, ElementRef } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  @ViewChild('myModal') myModal!: ElementRef;

  display = "none";

  clients:Client=new Client()

  constructor(private clientserv:ClientService){}

  ajoutClient=()=>{
     this.clientserv.create(this.clients).subscribe((data=>{
      console.log(data)
      this.closeModal() 
      window.location.reload();
  }))
    
  }
  
  openModal() { 
       this.display = "block";
  }
 
  closeModal() {
    this.display = "none";
  }


}
