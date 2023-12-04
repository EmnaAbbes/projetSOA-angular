import { Component, OnInit, ViewChild, ElementRef, Input  } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() clientId: number;

  @ViewChild('myModal') myModal!: ElementRef;

  display = "none";

  clients:Client=new Client();

  constructor(private clientserv:ClientService){}
  ngOnInit(){
   this.clientserv.find(this.clientId).subscribe(data => {
    this.clients = data;
  });
  }

  editClient=()=>{
     this.clientserv.edit(this.clients.id,this.clients).subscribe((data=>{
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
